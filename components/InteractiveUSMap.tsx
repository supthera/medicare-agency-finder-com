'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { US_STATES } from '@/types/agency';

interface InteractiveUSMapProps {
  onStateClick?: (stateCode: string) => void;
  selectedState?: string | null;
  onStateHover?: (stateCode: string | null) => void;
}

declare global {
  interface Window {
    jQuery: any;
    $: any;
    Raphael: any;
  }
}

export default function InteractiveUSMap({ onStateClick, selectedState, onStateHover }: InteractiveUSMapProps) {
  // Mute hover sound for a few seconds after select
  const hoverMuteRef = useRef(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const mapInitializedRef = useRef(false);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const selectSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize hover sound effect
  useEffect(() => {
  hoverSoundRef.current = new Audio('/hover_tick_spy_v2_ultra_subtle.wav');
  hoverSoundRef.current.volume = 0.01; // Set volume to 1%
  }, []);

  // Initialize select sound effect
  useEffect(() => {
    selectSoundRef.current = new Audio('/Confirm Tap for state.mp3');
    selectSoundRef.current.volume = 0.03; // Set volume to 3%
  }, []);

  // Load external scripts (jQuery, Raphael, usmap)
  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        // Load in order: jQuery -> Raphael -> usmap
        await loadScript('https://code.jquery.com/jquery-3.7.1.min.js');
        await loadScript('/raphael.js');
        await loadScript('/jquery.usmap.js');
        
        setScriptsLoaded(true);
      } catch (error) {
        console.error('Error loading map scripts:', error);
      }
    };

    loadAllScripts();
  }, []);

  // Initialize the map once scripts are loaded
  useEffect(() => {
    if (!scriptsLoaded || !mapContainerRef.current || !window.jQuery || mapInitializedRef.current) return;

    const $ = window.jQuery;
    const Raphael = window.Raphael;

    // Initialize the usmap plugin
    $(mapContainerRef.current).usmap({
      // Default state styles
      stateStyles: {
        fill: '#2a2929', // Dark grey
        stroke: '#ffffff',
        'stroke-width': 1.5,
        'stroke-linejoin': 'round'
      },

      // Hover styles - states turn BLACK on hover
      stateHoverStyles: {
        fill: '#000000',
        stroke: '#ffffff',
        'stroke-width': 2
      },

      // Smooth animation
      stateHoverAnimation: 200,

      // Show labels for small northeastern states
      showLabels: true,

      labelWidth: 35,
      labelHeight: 20,

      labelBackingStyles: {
        fill: '#2a2929',
        stroke: '#ffffff',
        'stroke-width': 1
      },

      labelBackingHoverStyles: {
        fill: '#000000',
        stroke: '#ffffff'
      },

      labelTextStyles: {
        fill: '#ffffff',
        'font-size': '13px',
        'font-weight': '600'
      },

      // Mouse over handler
      mouseover: function (event: any, data: any) {
        const stateCode = data.name;
        
        // Play hover sound effect only if not muted
        if (!hoverMuteRef.current && hoverSoundRef.current) {
          hoverSoundRef.current.currentTime = 0; // Reset to start
          hoverSoundRef.current.play().catch(err => console.log('Audio play failed:', err));
        }
        
        if (onStateHover) {
          onStateHover(stateCode);
        }
      },

      // Mouse out handler
      mouseout: function (event: any, data: any) {
        if (onStateHover) {
          onStateHover(null);
        }
      },

      // Click handler
      click: function (event: any, data: any) {
        const stateCode = data.name;
        // Play select sound effect
        if (selectSoundRef.current) {
          selectSoundRef.current.currentTime = 0;
          selectSoundRef.current.play().catch(err => console.log('Audio play failed:', err));
        }
        // Mute hover sound for 2 seconds
        hoverMuteRef.current = true;
        setTimeout(() => {
          hoverMuteRef.current = false;
        }, 2000);
        if (onStateClick) {
          onStateClick(stateCode);
        }
      }
    });

    // Add custom state labels for larger states (excluding small east coast states, AK, HI)
    // Small east coast states already have labels: VT, NH, MA, RI, CT, NJ, DE, MD, DC
    // Use setTimeout to ensure the map is fully initialized
    setTimeout(() => {
      if (!mapContainerRef.current) return;
      
      const mapData = $(mapContainerRef.current).data('usmap');
      if (!mapData || !mapData.paper || !mapData.stateShapes) {
        console.log('Map data not ready yet');
        return;
      }

      const statesToLabel = [
        'WA', 'OR', 'CA', 'NV', 'ID', 'MT', 'WY', 'UT', 'AZ', 'NM', 'CO',
        'ND', 'SD', 'NE', 'KS', 'OK', 'TX', 'MN', 'IA', 'MO', 'AR', 'LA',
        'WI', 'IL', 'MS', 'MI', 'IN', 'OH', 'KY', 'TN', 'AL', 'WV', 'VA',
        'NC', 'SC', 'GA', 'FL', 'PA', 'NY', 'ME'
      ];

      const paper = mapData.paper;
      const stateShapes = mapData.stateShapes;

      // Fix SVG clipping - allow overflow for label boxes
      const svgElement = $(mapContainerRef.current).find('svg')[0];
      if (svgElement) {
        svgElement.style.overflow = 'visible';
        // Set a very generous viewBox to accommodate all label boxes
        // Labels start at x=860, with our larger boxes they need more room
        svgElement.setAttribute('viewBox', '-50 -50 1200 750');
        svgElement.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      }

      statesToLabel.forEach((state) => {
        if (stateShapes[state]) {
          try {
            const bbox = stateShapes[state].getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;

            // Add text label
            paper.text(centerX, centerY, state).attr({
              'fill': '#ffffff',
              'font-size': '11px',
              'font-weight': 'bold',
              'opacity': 0.8,
              'pointer-events': 'none'
            });
          } catch (err) {
            console.error(`Error adding label for ${state}:`, err);
          }
        }
      });
    }, 200);

    mapInitializedRef.current = true;

    // Cleanup only on unmount
    return () => {
      if (mapContainerRef.current && mapInitializedRef.current) {
        $(mapContainerRef.current).empty();
        mapInitializedRef.current = false;
      }
    };
  }, [scriptsLoaded]);

  return (
    <div className="relative w-full h-full" style={{ overflow: 'visible' }}>
      <div 
        ref={mapContainerRef} 
        className="w-full h-full"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible'
        }}
      />

      {/* Loading Overlay */}
      {!scriptsLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="text-center">
            <div className="relative w-12 h-12 mx-auto mb-3">
              <div className="absolute inset-0 border-2 border-red-900/30 rounded-full"></div>
              <div className="absolute inset-0 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-slate-400 font-light text-xs tracking-wider uppercase">Initializing Map</p>
          </div>
        </div>
      )}
    </div>
  );
}
