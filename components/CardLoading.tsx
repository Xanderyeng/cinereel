export default function CardLoading() {
    return (
      <div className="rounded-lg overflow-hidden shadow-md">
        <div className="animate-pulse bg-muted w-full h-64" />
        <div className="p-4 space-y-2">
          <div className="animate-pulse bg-muted h-4 w-3/4 rounded" />
          <div className="animate-pulse bg-muted h-4 w-1/2 rounded" />
        </div>
      </div>
    )
  }