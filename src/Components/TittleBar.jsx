export default function TitleBar() {
  const menus = [
    'File',
    'Edit',
    'View',
    'Insert',
    'Format',
    'Data',
    'Tools',
    'Gemini'
  ]

  return (
    <div className="w-full border-b bg-white">
      <div className="flex items-center gap-6 px-4 h-10 text-sm text-gray-700">
        {menus.map((menu, index) => (
          <span
            key={index}
            className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
          >
            {menu}
          </span>
        ))}
      </div>
    </div>
  )
}
