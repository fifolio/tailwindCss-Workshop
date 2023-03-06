export default function colors() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 via-red-500 to-blue-500 p-6 mx-w-sm mx-auto shadow width">
      <div className="text-xl font-medium text-black">Notifications</div>
      <p className="text-slate-10">You have a new notify</p>

      {/* Rounded Corners - Border Radius */}
      <button className="m-10 px-4 py-3 rounded-full bg-blue-50 text-black">
        Rounded Corners - Border Radius
      </button>

      {/* hover - shadow */}
      <button className="shadow hover:bg-yellow-500  m-10 px-4 py-3 rounded-full bg-blue-50 text-black">
        hover - shadow
      </button>
    </div>
  );
}
