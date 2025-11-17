'use client';

import { Agency } from '@/types/agency';

interface AgencyTableProps {
  agencies: Agency[];
}

export default function AgencyTable({ agencies }: AgencyTableProps) {
  if (agencies.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No agencies found for this state.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
              Provider Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
              Address
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
              City
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
              Phone
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
              Services
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
              Quality Rating
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {agencies.map((agency, index) => (
            <tr key={agency.ccn || index} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-gray-900">
                {agency.providerName}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {agency.address}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {agency.city}, {agency.state} {agency.zipCode}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {agency.phone}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                <div className="flex flex-wrap gap-1">
                  {agency.nursingCare && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      Nursing
                    </span>
                  )}
                  {agency.physicalTherapy && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      PT
                    </span>
                  )}
                  {agency.occupationalTherapy && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                      OT
                    </span>
                  )}
                  {agency.speechPathology && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      Speech
                    </span>
                  )}
                  {agency.homeHealthAide && (
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">
                      HHA
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {agency.qualityRating ? (
                  <div className="flex items-center">
                    <span className="font-semibold text-yellow-600">
                      {agency.qualityRating}
                    </span>
                    <span className="ml-1 text-yellow-500">★</span>
                  </div>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
