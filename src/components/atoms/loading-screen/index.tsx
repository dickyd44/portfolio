export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-galaxy_core z-50">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
