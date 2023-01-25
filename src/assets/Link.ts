type LinkFooter = {
    title: string,
    links: Links[]

}[]

type Links = {
    name: string,
    path: string
}

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
                path: "/phimhoathinh"
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
                path: "/phimle"
            }, {
                name: "Liên hệ",
                path: "/phimbo"
            }, {
                name: "Tin tức",
                path: "/phimchieurap"
            }
        ]
    },
]