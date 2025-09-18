import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

export function ConvAIWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <elevenlabs-convai agent-id="agent_0201k5cbfd5xefs8p86d6k1zjm77" />
    </div>
  );
}