import { NextResponse } from 'next/server';

// CMS data source URL - direct CSV download
const CMS_DATA_URL = 'https://data.cms.gov/provider-data/sites/default/files/resources/6d48d0c7bf12e7b606974f9c0d7eda0f_1730782890/HHC_SOCRATA.csv';

export async function GET(request: Request) {
  try {
    // Verify authorization (optional - protect your cron endpoint)
    const authHeader = request.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Starting CMS data sync...');
    
    // Fetch CSV data from CMS
    const response = await fetch(CMS_DATA_URL, {
      headers: {
        'User-Agent': 'MedicareAgencyFinder/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CMS data: ${response.status}`);
    }

    const csvText = await response.text();
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');

    console.log(`Fetched ${lines.length} rows from CMS`);

    // Parse CSV and extract relevant fields
    // This is a simplified version - in production, you'd:
    // 1. Parse CSV properly (handle quotes, commas in fields)
    // 2. Store in a database (Postgres, SQLite, etc.)
    // 3. Update existing records or insert new ones
    
    const agencies = [];
    for (let i = 1; i < Math.min(lines.length, 100); i++) {
      const line = lines[i];
      if (!line.trim()) continue;
      
      const columns = line.split(',');
      
      // Map CSV columns to our Agency type
      // Column indices based on CMS dataset structure
      const agency = {
        state: columns[0]?.trim() || '',
        ccn: columns[1]?.trim() || '',
        providerName: columns[2]?.trim() || '',
        address: columns[3]?.trim() || '',
        city: columns[4]?.trim() || '',
        zipCode: columns[5]?.trim() || '',
        phone: columns[6]?.trim() || '',
        ownership: columns[7]?.trim() || '',
        nursingCare: columns[8]?.toLowerCase() === 'yes',
        physicalTherapy: columns[9]?.toLowerCase() === 'yes',
        occupationalTherapy: columns[10]?.toLowerCase() === 'yes',
        speechPathology: columns[11]?.toLowerCase() === 'yes',
        medicalSocial: columns[12]?.toLowerCase() === 'yes',
        homeHealthAide: columns[13]?.toLowerCase() === 'yes',
        certificationDate: columns[14]?.trim() || '',
        qualityRating: parseFloat(columns[15]) || null,
        lastUpdated: new Date(),
      };
      
      agencies.push(agency);
    }

    // TODO: Store in database
    // await db.agencies.deleteMany();
    // await db.agencies.insertMany(agencies);

    return NextResponse.json({
      success: true,
      message: `Successfully synced ${agencies.length} agencies`,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Error syncing CMS data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to sync data',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
