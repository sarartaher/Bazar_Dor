const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="skeleton mb-6 h-10 w-64"></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="skeleton h-32 w-full"></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
