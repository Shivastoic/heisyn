export default function Numbers() {

    // DATA
    const data = [
        { id: 1, label: 'Users', value: '1,234+' },
        { id: 2, label: 'Downloads', value: '5,678' },
        { id: 3, label: 'Reviews', value: '910' },
        { id: 4, label: 'Likes', value: '11,121' },
    ];

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {data.map((item) => (
                <div key={item.id} className="text-center space-y-4">
                    <div className="text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold">{item.value}</div>
                    <div className="text-2xl text-gray-500">{item.label}</div>
                </div>
            ))}
        </div>

    )

}
