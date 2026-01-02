const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Access Denied 🚫
        </h1>
        <p className="text-gray-600">
          You do not have permission to view this page.
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
