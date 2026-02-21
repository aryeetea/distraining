interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, onClick, className = '' }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 text-white transition-all hover:opacity-90 hover:shadow-lg ${className}`}
      style={{ 
        backgroundColor: '#003087',
        borderRadius: '999px',
        fontSize: '15px',
        fontWeight: '500',
        boxShadow: '0 2px 8px rgba(0, 48, 135, 0.25)'
      }}
    >
      {children}
    </button>
  );
}