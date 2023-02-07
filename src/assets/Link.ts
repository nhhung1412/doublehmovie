type LinkFooter = {
    title: string,
    links: Links[]

}[]

type Links = {
    name: string,
    path: string
}


type Genres = {
    id: number,
    name: string
}

export const Genres: Genres[] = [

    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    }

]

export const LinkFooter: LinkFooter = [
    {
        title: "Phim Hay",
        links: [
            {
                name: "Phim lẻ",
                path: "/phimle"
            }, {
                name: "Phim bộ",
                path: "/phimbo"
            }, {
                name: "Phim chiếu rạp",
                path: "/phimchieurap"
            }, {
                name: "Phim thịnh hành",
                path: "/phimle"
            },
        ]
    },
    {
        title: "Thể loại",
        links: [
            {
                name: "Hành động",
                path: "/hanhdong"
            }, {
                name: "Tình cảm",
                path: "/tinhcam"
            }, {
                name: "Hài hước",
                path: "/haihuoc"
            }, {
                name: "Ma - Kinh dị",
                path: "/ma-kinhdi"
            },
        ]
    },
    {
        title: "Trợ giúp",
        links: [
            {
                name: "Trang chính",
                path: "/trangchinh"
            },
            {
                name: "Hỏi đáp",
                path: "/hoidap"
            }, {
                name: "Liên hệ",
                path: "/lienhe"
            }, {
                name: "Tin tức",
                path: "/tintuc"
            }
        ]
    },
]