'use client';

import { useState } from 'react';
import InteractiveUSMap from './InteractiveUSMap';
import { US_STATES } from '@/types/agency';

interface MapDashboardPanelProps {
  onStateClick?: (stateCode: string | null) => void;
  expandedStates?: Set<string>;
}

export default function MapDashboardPanel({ onStateClick, expandedStates }: MapDashboardPanelProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

    const handleStateClick = (stateCode: string) => {
    if (selectedState === stateCode) {
      // Deselect if clicking same state
      setSelectedState(null);
      if (onStateClick) {
        onStateClick(null);  // Pass null to parent to indicate deselection
      }
    } else {
      // Select new state
      setSelectedState(stateCode);
      if (onStateClick) {
        onStateClick(stateCode);
      }
    }
  };

  const handleStateHover = (stateCode: string | null) => {
    setHoveredState(stateCode);
  };

  // Determine if we should show the selected state
  // Only show if: hovering, OR (selected AND expanded)
  const isSelectedStateExpanded = selectedState && expandedStates?.has(selectedState);
  const shouldShowSelected = !hoveredState && isSelectedStateExpanded;
  
  const displayState = hoveredState || (shouldShowSelected ? selectedState : null);
  const stateName = displayState ? US_STATES[displayState] : null;

  return (
    <div className="map-dashboard-page">
      <div className="map-dashboard-panel">
        <div className="map-dashboard-main">
          <div className="map-dashboard-chip">Interactive Map</div>

          <div className="map-dashboard-map">
            <InteractiveUSMap 
              onStateClick={handleStateClick}
              selectedState={selectedState}
              onStateHover={handleStateHover}
            />
          </div>
        </div>

        <aside className="map-dashboard-side">
          <h2 className="map-dashboard-side-title">Intelligence Dashboard</h2>

          <div className="map-dashboard-metric">
            <span className="map-dashboard-metric-label">Selected State</span>
            <span className="map-dashboard-metric-value" style={{ color: displayState ? '#fbbf24' : '#fca5a5' }}>
              {displayState && stateName 
                ? `${displayState} – ${stateName}` 
                : 'N/A - None'}
            </span>
          </div>

          <div className="map-dashboard-metric">
            <span className="map-dashboard-metric-label">Total Agencies</span>
            <span className="map-dashboard-metric-value">—</span>
          </div>

          <div className="map-dashboard-metric">
            <span className="map-dashboard-metric-label">Certification Status</span>
            <span className="map-dashboard-metric-value">—</span>
          </div>

          <div className="map-dashboard-metric">
            <span className="map-dashboard-metric-label">Quality Index</span>
            <span className="map-dashboard-metric-value">—</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
