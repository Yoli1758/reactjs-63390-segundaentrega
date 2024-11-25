const products = [
    {
        id: "1",
        name: "Nike Fast",
        price: 1000,
        category: "calzas",
        imgs:
        {
            imgProduct: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f26c91c-f969-437c-ae10-a04bbd4681ca/W+NK+DF+FAST+MR+7%2F8+TIGHT+SW.png",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 25,
        description: "Leggins de running de 7/8 con bolsillos",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f26c91c-f969-437c-ae10-a04bbd4681ca/W+NK+DF+FAST+MR+7%2F8+TIGHT+SW.png"},
            {id:2,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf2e66aa-01d0-4553-9979-b10ad3812a68/W+NK+DF+FAST+MR+7%2F8+TIGHT+SW.png"},
            {id:3,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ccae51e-e18c-4f3a-80a7-747c5e414578/W+NK+DF+FAST+MR+7%2F8+TIGHT+SW.png"},
            {id:4,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/20b64d40-3318-490e-b7cb-dba6233b76d6/W+NK+DF+FAST+MR+7%2F8+TIGHT+SW.png"}],
        
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "2",
        name: "Nike Dri-FIT",
        price: 900,
        category: "remeras",
        imgs:
        {
            imgProduct: "https://nikearprod.vtexassets.com/arquivos/ids/880498-800-800?width=800&height=800&aspect=true",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 10,
        description: "Remera de Running para Hombre",
        newCollection: true,
        imgDetail:[
            {id:1,img:"https://nikearprod.vtexassets.com/arquivos/ids/880498-800-800?width=800&height=800&aspect=true"},
            {id:2,img:"https://nikearprod.vtexassets.com/arquivos/ids/891008-800-800?width=800&height=800&aspect=true"},
            {id:3,img:"https://nikearprod.vtexassets.com/arquivos/ids/887502-800-800?width=800&height=800&aspect=true"},
            {id:4,img:"https://nikearprod.vtexassets.com/arquivos/ids/1040115-800-800?width=800&height=800&aspect=true"},
            ],
            talles:[
                {id:1, value:"XS"},
                {id:2, value:"S"},
                {id:3, value:"M"},
                {id:4, value:"L"},
                {id:5, value:"XL"},
            ],
    },
    {
        id: "3",
        name: "Traje de baño",
        price: 800,
        category: "banador",
        imgs:
        {
            imgProduct: "https://static.wixstatic.com/media/9a122a_8fb26f4ce77242afab95bd8b0282261b~mv2.jpg/v1/fill/w_550,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9a122a_8fb26f4ce77242afab95bd8b0282261b~mv2.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 8,
        description: "Triangulo clasico / cebra azul camel bordada",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://static.wixstatic.com/media/9a122a_8fb26f4ce77242afab95bd8b0282261b~mv2.jpg/v1/fill/w_550,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9a122a_8fb26f4ce77242afab95bd8b0282261b~mv2.jpg"},
            {id:2,img:"https://static.wixstatic.com/media/9a122a_a4be6675b71d454790510e0268b5c409~mv2.jpg/v1/fill/w_550,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9a122a_a4be6675b71d454790510e0268b5c409~mv2.jpg"},
            {id:3,img:"https://static.wixstatic.com/media/9a122a_beebbe25a8c4448ea644ddb22b85d7d0~mv2.jpg/v1/fill/w_550,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9a122a_beebbe25a8c4448ea644ddb22b85d7d0~mv2.jpg"},
            {id:4,img:"https://static.wixstatic.com/media/9a122a_9d7923ed5a254a39bb028a61ee0e81fd~mv2.jpg/v1/fill/w_349,h_595,al_c,lg_1,q_80,enc_auto/9a122a_9d7923ed5a254a39bb028a61ee0e81fd~mv2.jpg"},
                        ],
                        talles:[
                            {id:1, value:"XS"},
                            {id:2, value:"S"},
                            {id:3, value:"M"},
                            {id:4, value:"L"},
                            {id:5, value:"XL"},
                        ],
    },
    {
        id: "4",
        name: "Nike Pro",
        price: 2500,
        category: "calzas",
        imgs:
        {
            imgProduct: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/426517b1-d66c-4591-aeb7-d047f7f3e43d/W+NP+365+TIGHT.png",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 10,
        description: "Leggings de talle medio con paneles de malla",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/426517b1-d66c-4591-aeb7-d047f7f3e43d/W+NP+365+TIGHT.png"},
            {id:2,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/42dcc1d4-149c-4a26-868a-69237e006bd4/W+NP+365+TIGHT.png"},
            {id:3,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1870500f-e855-489f-9545-b759d075fada/W+NP+365+TIGHT.png"},
            {id:4,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0ba40bb-935b-4737-bf69-682aa7bce9d9/W+NP+365+TIGHT.png"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "5",
        name: "Remera Under Armour Tech Solid",
        price: 1200,
        category: "remeras",
        imgs:
        {
            imgProduct: "https://underarmourbr.vtexassets.com/arquivos/ids/348012-800-auto?v=638654681448200000&width=800&height=auto&aspect=true",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 5,
        description: "Comoda para entrenamiento en dias calurosos",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://underarmourbr.vtexassets.com/arquivos/ids/348012-800-auto?v=638654681448200000&width=800&height=auto&aspect=true"},
            {id:2,img:"https://underarmourbr.vtexassets.com/arquivos/ids/348015-800-auto?v=638654681719900000&width=800&height=auto&aspect=true"},
            {id:3,img:"https://underarmourbr.vtexassets.com/arquivos/ids/348017-800-auto?v=638654681860030000&width=800&height=auto&aspect=true"},
            {id:4,img:"https://underarmourbr.vtexassets.com/arquivos/ids/348013-800-auto?v=638654681528870000&width=800&height=auto&aspect=true"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "6",
        name: "Campera Run It",
        price: 1300,
        category: "abrigos",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2d7e906c29474168b17624e083940d73_9366/Chaqueta_Run_It_Negro_IL2286_HM3_hover.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 12,
        description: "Campera de Running Adidas para hombre",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2d7e906c29474168b17624e083940d73_9366/Chaqueta_Run_It_Negro_IL2286_HM3_hover.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d9e1ea32294445c9bfdc3ec314453c0_9366/Chaqueta_Run_It_Negro_IL2286_HM30.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba70b96af88c4fa48657d1205998edda_9366/Chaqueta_Run_It_Negro_IL2286_HM8.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50d8d65c52be41f8bd08144fbb517906_9366/Chaqueta_Run_It_Negro_IL2286_HM6.jpg"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "7",
        name: "Short legging running",
        price: 2500,
        category: "calzas",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb8a179c1fea4fb3b48af46bc390dd48_9366/Shorts_Legging_Corrida_Adizero_Control_Preto_IK9712_HM1.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
      imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 10,
        description: "Perfecta para competencias y entrenamientos rápidos",
        newCollection: true,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb8a179c1fea4fb3b48af46bc390dd48_9366/Shorts_Legging_Corrida_Adizero_Control_Preto_IK9712_HM1.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/67fddfd41e384a2caddcffbae5a21c08_9366/Shorts_Legging_Corrida_Adizero_Control_Preto_IK9712_HM3_hover.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46fecd681fa6467ba075c0293f917e76_9366/Shorts_Legging_Corrida_Adizero_Control_Preto_IK9712_HM5.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bfb0ac6e521e486595ab295df4526ac6_9366/Shorts_Legging_Corrida_Adizero_Control_Preto_IK9712_HM4.jpg"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "8",
        name: "Vanish Elite Vent",
        price: 2500,
        category: "calzas",
        imgs:
        {
            imgProduct: "https://underarmourbr.vtexassets.com/arquivos/ids/335670-800-auto?v=638536355280370000&width=800&height=auto&aspect=true",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 2,
        description: "Legging Under Armour vanish Elite Vent",
        newCollection: true,
        imgDetail:[
            {id:1,img:"https://underarmourbr.vtexassets.com/arquivos/ids/335670-800-auto?v=638536355280370000&width=800&height=auto&aspect=true"},
            {id:2,img:"https://underarmourbr.vtexassets.com/arquivos/ids/335671-800-auto?v=638536355286630000&width=800&height=auto&aspect=true"},
            {id:3,img:"https://underarmourbr.vtexassets.com/arquivos/ids/335672-800-auto?v=638536355293330000&width=800&height=auto&aspect=true"},
            {id:4,img:"https://underarmourbr.vtexassets.com/arquivos/ids/335673-800-auto?v=638536355299030000&width=800&height=auto&aspect=true"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "9",
        name: "Remera Corta de Manga Larga",
        price: 350,
        category: "remeras",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a02689a61e8a428fb7730428096e7bf0_9366/Camiseta_corta_de_manga_larga_Hyperglam_Training_Negro_IN6773_HM1.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 40,
        description: "Remera para Entrenamiento Hyperglam Training",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a02689a61e8a428fb7730428096e7bf0_9366/Camiseta_corta_de_manga_larga_Hyperglam_Training_Negro_IN6773_HM1.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f95e40534404d47bd1ad582c57fa82d_9366/Camiseta_corta_de_manga_larga_Hyperglam_Training_Negro_IN6773_HM3_hover.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/282a70958f0d4e81bfa7379667efb995_9366/Camiseta_corta_de_manga_larga_Hyperglam_Training_Negro_IN6773_HM4_hover.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/054c14b26c754acf987a31b821ced35d_9366/Camiseta_corta_de_manga_larga_Hyperglam_Training_Negro_IN6773_HM5.jpg"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "10",
        name: "Adidas New York city ",
        price: 300,
        category: "abrigos",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f34d9ed66f0740c78bbe4230a7bf97e9_9366/Chaqueta_New_York_City_Rojo_IW9234_HM1.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 35,
        description: "Campera New York City Running",
        newCollection: true,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f34d9ed66f0740c78bbe4230a7bf97e9_9366/Chaqueta_New_York_City_Rojo_IW9234_HM1.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/daa943be89144278bbf291da59307a7b_9366/Chaqueta_New_York_City_Rojo_IW9234_HM3_hover.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6c1c57b700244ea2886e3bedf812eddb_9366/Chaqueta_New_York_City_Rojo_IW9234_HM30.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e826daf8c744458bb27095434ec2024_9366/Chaqueta_New_York_City_Rojo_IW9234_HM5.jpg"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "11",
        name: "Sportswear Adidas",
        price: 500,
        category: "banador",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1977950a004342289297c454c46d7f85_9366/Braguita_de_bikini_Iconisea_Mid-Waist_Negro_IM7700_21_model.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 1,
        description: "Braguita de Bikini Iconisea Mid-Waist",
        newCollection: true,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1977950a004342289297c454c46d7f85_9366/Braguita_de_bikini_Iconisea_Mid-Waist_Negro_IM7700_21_model.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a84f5b5de8d44c09b126571199a51dc3_9366/Braguita_de_bikini_Iconisea_Mid-Waist_Negro_IM7700_23_hover_model.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b4eb6f62cf474aa397d1c6a97daaed_9366/Braguita_de_bikini_Iconisea_Mid-Waist_Negro_IM7700_41_detail.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c1b9910f5aa45189bbb39b8443f9a32_9366/Braguita_de_bikini_Iconisea_Mid-Waist_Negro_IM7700_42_detail.jpg"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "12",
        name: "Shorts legging Optime 4",
        price: 3500,
        category: "calzas",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/216a1ebe597441cc9f200cf1def17494_9366/Shorts_Legging_Optime_4-Inch_Raw-Cut-Hem_Azul_IK5482_21_model.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 15,
        description: "Short Legging Optime 4 Adidas",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/216a1ebe597441cc9f200cf1def17494_9366/Shorts_Legging_Optime_4-Inch_Raw-Cut-Hem_Azul_IK5482_21_model.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c978d02c2db4f01856419d8cd8bde38_9366/Shorts_Legging_Optime_4-Inch_Raw-Cut-Hem_Azul_IK5482_23_hover_model.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f3b487b4eca4f1fb3aae9109525bb89_9366/Shorts_Legging_Optime_4-Inch_Raw-Cut-Hem_Azul_IK5482_25_model.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d820e6a9c1494b87b3e6ed8a7abfdbcd_9366/Shorts_Legging_Optime_4-Inch_Raw-Cut-Hem_Azul_IK5482_41_detail.jpg"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "13",
        name: "Bañador 3 Bandas",
        price: 150,
        category: "banador",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe99d21cc90e405081d6edd1ea7700f7_9366/Banador_Extra-Long-Life_3_bandas_Negro_IL7275_21_model.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 4,
        description: "Bañador extra Long-Life 3 Bandas",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe99d21cc90e405081d6edd1ea7700f7_9366/Banador_Extra-Long-Life_3_bandas_Negro_IL7275_21_model.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d14975d2dddf41fc9c51a73e39909c55_9366/Banador_Extra-Long-Life_3_bandas_Negro_IL7275_25_model.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f379d879a36c47d4b34dec7fe9ab4d07_9366/Banador_Extra-Long-Life_3_bandas_Negro_IL7275_23_hover_model.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/307deeb2ea8a42818057dba592963c21_9366/Banador_Extra-Long-Life_3_bandas_Negro_IL7275_42_detail.jpg"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "14",
        name: "HeatGear Aromour",
        price: 2500,
        category: "calzas",
        imgs:
        {
            imgProduct: "https://underarmourbr.vtexassets.com/arquivos/ids/163153-800-auto?v=637488703286900000&width=800&height=auto&aspect=true",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
      imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 10,
        description: "Legging Capri Under Armour Print",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://underarmourbr.vtexassets.com/arquivos/ids/163153-800-auto?v=637488703286900000&width=800&height=auto&aspect=true"},
            {id:2,img:"https://underarmourbr.vtexassets.com/arquivos/ids/163155-800-auto?v=637488703288600000&width=800&height=auto&aspect=true"},
            {id:3,img:"https://underarmourbr.vtexassets.com/arquivos/ids/163157-800-auto?v=637488703290370000&width=800&height=auto&aspect=true"},
            {id:4,img:"https://underarmourbr.vtexassets.com/arquivos/ids/163159-800-auto?v=637488703292530000&width=800&height=auto&aspect=true"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "15",
        name: "Nike Unlimited",
        price: 3300,
        category: "abrigos",
        imgs:
        {
            imgProduct: "https://nikearprod.vtexassets.com/arquivos/ids/845348-800-800?width=800&height=800&aspect=true",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 12,
        description: "Campera de Entrenamiento para Hombre",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://nikearprod.vtexassets.com/arquivos/ids/845348-800-800?width=800&height=800&aspect=true"},
            {id:2,img:"https://nikearprod.vtexassets.com/arquivos/ids/851238-800-800?width=800&height=800&aspect=true"},
            {id:3,img:"https://nikearprod.vtexassets.com/arquivos/ids/848499-800-800?width=800&height=800&aspect=true"},
            {id:4,img:"https://nikearprod.vtexassets.com/arquivos/ids/856260-800-800?width=800&height=800&aspect=true"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "16",
        name: "Nike Storm - FIT Swift",
        price: 4800,
        category: "abrigos",
        imgs:
        {
            imgProduct: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aab6128a-f67d-4bed-8d39-caefb966ad2f/W+NK+SWIFT+SF+JKT.png",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 12,
        description: "Campera de running - Mujer",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aab6128a-f67d-4bed-8d39-caefb966ad2f/W+NK+SWIFT+SF+JKT.png"},
            {id:2,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/74310e31-f884-4209-97a6-7dbb0c1b80cc/W+NK+SWIFT+SF+JKT.png"},
            {id:3,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b6a901d-8b6d-49a6-a755-0b78bd176faf/W+NK+SWIFT+SF+JKT.png"},
            {id:4,img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a99257f3-3217-494c-8a37-6a4cae3a45e0/W+NK+SWIFT+SF+JKT.png"},
        ],
        talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "17",
        name: "Big Bars",
        price: 800,
        category: "banador",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a773184438b24f138545ed091a0d6648_9366/Bikini_Big_Bars_Negro_IS4726_21_model.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
            imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 8,
        description: "Bikini BigBars Natacion Mujer",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a773184438b24f138545ed091a0d6648_9366/Bikini_Big_Bars_Negro_IS4726_21_model.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee4bc33e723f41569f8699c9caa78130_9366/Bikini_Big_Bars_Negro_IS4726_23_hover_model.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9080f5f708d34d5488e5e0ec5a953d89_9366/Bikini_Big_Bars_Negro_IS4726_42_detail.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/86e70ef9f85e4fecad4e18f69ecc1390_9366/Bikini_Big_Bars_Negro_IS4726_41_detail.jpg"},
            ],
            talles:[
            {id:1, value:"XS"},
            {id:2, value:"S"},
            {id:3, value:"M"},
            {id:4, value:"L"},
            {id:5, value:"XL"},
        ],
    },
    {
        id: "18",
        name: "Pabllo Vitar Bikini",
        price: 800,
        category: "banador",
        imgs:
        {
            imgProduct: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54bfa3657d754acb9bbbd114b13a7a2e_9366/Bikini_Pride_Pabllo_Vittar_Blanco_IV8311_21_model.jpg",
            imgSoldOut: `${process.env.PUBLIC_URL}/img/agotado.jpg`,
             imgStar: `${process.env.PUBLIC_URL}/img/oferta.jpg`,
        },
        stock: 8,
        description: "Bikini Pride Pabllo Vittar",
        newCollection: false,
        imgDetail:[
            {id:1,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54bfa3657d754acb9bbbd114b13a7a2e_9366/Bikini_Pride_Pabllo_Vittar_Blanco_IV8311_21_model.jpg"},
            {id:2,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2d92f2b4db5347b28101294134bc8e42_9366/Bikini_Pride_Pabllo_Vittar_Blanco_IV8311_41_detail.jpg"},
            {id:3,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44099cd0159943e6bd4f20c481c75673_9366/Bikini_Pride_Pabllo_Vittar_Blanco_IV8311_25_model_hover.jpg"},
            {id:4,img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4afd0f7a235c406bbb95718364024e45_9366/Bikini_Pride_Pabllo_Vittar_Blanco_IV8311_01_laydown.jpg"},
                        ],
                        talles:[
                            {id:1, value:"XS"},
                            {id:2, value:"S"},
                            {id:3, value:"M"},
                            {id:4, value:"L"},
                            {id:5, value:"XL"},
                        ],
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2500);
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category))

        }, 1500);
    })
}
//obtener un solo producto por ID
export const getProductsByID = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productoId) || null)

        }, 2500);
    })
}
