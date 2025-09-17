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
      <elevenlabs-convai agent-id="agent_8101k2hz07sjfr9sj0v2g277vjkj" />
    </div>
  );
}