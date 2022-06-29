Vue.createApp({
    data() {
        return {
            // Artikel
            Artikel: [],
            baca: null,

            header:{
                judul:"Mukti Portofolio",
                desc: "Website yang berisi tentang portofolio Mukti Candela"
            },
            nav: {
                h:"home",
                a:"About me",
                m:"My Project",
                t:"tabel Keterampilan",
                ar:"artikel",
                k:"kontak"
            },
            about:{
                judul:"About Me",
                desc:"Nama Saya Mukti Candela asal dari Riau, Pekerjaan saya saat ini menjadi Mahasiswa di Universitas Ahmad Dahlan Yogyakarta, Program Studi Sistem Informasi Angkatan 2020."

            },
            project:{
                judul:"My Project",
                desc:"Kopi, bukan untuk bergaya atau instastory, tetapi kebutuhan yang menimbulkan inspirasi. #KangSeduh",

            },
            table:{
                judul:"Tabel Keterampilan",
                th:["No.","Keterampilan","Skill"],
                tr:[
                    {
                        k:"Microsoft Word",
                        s:"Intermediatte"
                    },
                    {
                        k:"Microsoft Power Point",
                        s:"Intermediatte"
                    },
                    {
                        k:"Microsoft Excel",
                        s:"Advance"
                    },
                    {
                        k:"HTML",
                        s:"Advance"
                    },
                    {
                        k:"CSS",
                        s:"Advance"
                    },
                    {
                        k:"Javasctipt",
                        s:"Intermediatte"
                    },
                ]
            }
            

            


        };
    },
    methods: { //tempat menambahkan fungsi-fungsi
        ambilDataMarkdown() {
            axios
                .get(
                    src = "./article/artikel.json"
                )
                .then((res) => {
                    console.log(res.data);
                    this.Artikel = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        tampilkanMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const baca = urlParams.get('baca');
            var converter = new showdown.Converter();
            axios
                .get(
                    src="./article/"+baca
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.baca = html;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
        this.ambilDataMarkdown(),
        this.tampilkanMarkdown()

    },
}).mount("#app");