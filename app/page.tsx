'use client';

import { useState } from 'react';
import MapDashboardPanel from '@/components/MapDashboardPanel';
import AgencyTable from '@/components/AgencyTable';
import { StateAgencies, US_STATES } from '@/types/agency';

// Mock data for demonstration - will be replaced with real data from API
const mockStateAgencies: StateAgencies[] = Object.keys(US_STATES).map((state) => ({
  state,
  stateName: US_STATES[state],
  count: 0,
  agencies: [],
}));

export default function HomePage() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());

  // Handle state click with smooth scroll
  const handleStateClick = (stateCode: string | null) => {
    setSelectedState(stateCode);
    
    if (stateCode) {
      // Auto-expand the selected state
      setExpandedStates(prev => {
        const newSet = new Set(prev);
        newSet.add(stateCode);
        return newSet;
      });
      
      // Smooth scroll to the state section
      const element = document.getElementById(`state-${stateCode}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
    // If stateCode is null, just deselect without scrolling
  };

  // Toggle state section expansion
  const toggleStateExpansion = (stateCode: string) => {
    setExpandedStates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stateCode)) {
        newSet.delete(stateCode);
      } else {
        newSet.add(stateCode);
      }
      return newSet;
    });
  };

  return (
    <>
      {/* Map Dashboard Panel */}
      <MapDashboardPanel 
        onStateClick={handleStateClick} 
        expandedStates={expandedStates}
      />

      {/* State Sections */}
      <section className="py-12" style={{ background: '#020202' }}>
        <div className="mx-auto px-4" style={{ maxWidth: '1200px' }}>
          {mockStateAgencies.map((stateData) => {
            const isExpanded = expandedStates.has(stateData.state);
            return (
              <div
                key={stateData.state}
                id={`state-${stateData.state}`}
                className="mb-8 scroll-mt-4"
              >
                <div 
                  className="rounded-2xl shadow-2xl border transition-all duration-300"
                  style={{
                    background: '#0a0a0a',
                    borderColor: '#2d2d2d',
                    maxHeight: isExpanded ? '2000px' : '200px',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3d3d3d'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2d2d2d'}
                >
                  <div 
                    className="p-8 cursor-pointer"
                    onClick={() => toggleStateExpansion(stateData.state)}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                          {stateData.state}
                        </div>
                        <h2 className="text-3xl font-bold text-white">
                          {stateData.stateName}
                        </h2>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                            Total Agencies
                          </div>
                          <div className="text-2xl font-bold" style={{ color: '#fca5a5' }}>
                            {stateData.count}
                          </div>
                        </div>
                        <div className="text-3xl text-gray-400 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          ▼
                        </div>
                      </div>
                    </div>
                    
                    {!isExpanded && (
                      <div className="text-sm text-gray-500 italic">
                        Click to view agencies...
                      </div>
                    )}
                  </div>
                  
                  {isExpanded && (
                    <div className="px-8 pb-8">
                      <AgencyTable agencies={stateData.agencies} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm" style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 600 }}>
            Medicare Agency Finder
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
              Data sourced from{' '}
              <a
                href="https://www.medicare.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="cms-link-rgb transition-colors"
                style={{ color: '#fbbf24' }}
              >
                CMS.gov
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
