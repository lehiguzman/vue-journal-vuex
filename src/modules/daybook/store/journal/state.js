export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Velit consectetur ipsum elit sint cillum non reprehenderit ea cillum.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Quis cupidatat anim duis irure amet ullamco.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Labore pariatur nulla deserunt eu laborum magna magna.',
            picture: null,
        }
    ]
})