export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-8 w-[420px] shadow-2xl">

        <h2 className="text-2xl font-bold text-red-600">
          Delete Lead
        </h2>

        <p className="mt-4 text-gray-600">
          Are you sure you want to delete this lead?
        </p>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}