import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Sergio Morales - Mobile Specialist & React Native Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        fontWeight: 700,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <div style={{ marginBottom: 20 }}>SM<span style={{ color: '#60a5fa' }}>.</span></div>
      <div style={{ fontSize: 36, fontWeight: 400, color: '#a1a1aa' }}>
        Sergio Alejandro Morales
      </div>
      <div style={{ fontSize: 28, color: '#60a5fa', marginTop: 10 }}>
        Mobile Specialist
      </div>
    </div>,
    {
      ...size,
    }
  );
}
