type LinkFooter = {
    title: string,
    links: Links[]

}[]

type Links = {
    name: string,
    path: string
}


type Genres = {
    idCate: number,
    nameCate: string
}

export const Genres: Genres[] = [

    {
        idCate: 28,
        nameCate: "Hành động"
    },
    {
        idCate: 12,
        nameCate: "Cuộc phiêu lưu"
    },
    {
        idCate: 16,
        nameCate: "Hoạt hình"
    },
    {
        idCate: 35,
        nameCate: "Hài kịch"
    },
    {
        idCate: 80,
        nameCate: "Tội phạm"
    },
    {
        idCate: 99,
        nameCate: "Phim tài liệu"
    },
    {
        idCate: 18,
        nameCate: "Kịch"
    },
    {
        idCate: 10751,
        nameCate: "Gia đình"
    },
    {
        idCate: 14,
        nameCate: "Giả tưởng"
    },
    {
        idCate: 36,
        nameCate: "Lịch sử"
    },
    {
        idCate: 27,
        nameCate: "Kinh dị"
    },
    {
        idCate: 10402,
        nameCate: "Âm nhạc"
    },
    {
        idCate: 9648,
        nameCate: "Viễn tưởng"
    },
    {
        idCate: 10749,
        nameCate: "Lãng mạn"
    },
    {
        idCate: 878,
        nameCate: "Bí ẩn"
    },
    {
        idCate: 10770,
        nameCate: "TV Movie"
    },
    {
        idCate: 53,
        nameCate: "Giật gân"
    },
    {
        idCate: 10752,
        nameCate: "Chiến tranh"
    },
    {
        idCate: 37,
        nameCate: "Miền tây"
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
                name: "Phim hoạt hình",
                path: "/genre/16/Hoạt%20hình"
            },
        ]
    },
    {
        title: "Thể loại",
        links: [
            {
                name: "Hành động",
                path: "/genre/28/Hành%20động"
            }, {
                name: "Lãng mạn",
                path: "/genre/10749/Lãng%20mạn"
            }, {
                name: "Hài kịch",
                path: "/genre/35/Hài%20kịch"
            }, {
                name: "Ma - Kinh dị",
                path: "/genre/27/Kinh%20dị"
            },
        ]
    },
    {
        title: "Trợ giúp",
        links: [
            {
                name: "Trang chính",
                path: ""
            },
            {
                name: "Hỏi đáp",
                path: ""
            }, {
                name: "Liên hệ",
                path: ""
            }, {
                name: "Tin tức",
                path: ""
            }
        ]
    },
]