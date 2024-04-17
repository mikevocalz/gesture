
const DATA = [
  {
    id: '1',
    title: 'Congrats',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225552250177327236/mikevocalz_large_congrats_ballon_for_a_product_category_on_a_we_c822d56b-a2bd-436c-9614-d417d53f165c.png?ex=66218b7a&is=660f167a&hm=8e86d7bc8991247f4f84db27d79625f5da11497fd32682237ab81a46362de92d&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: '2',
    title: 'Netflix & Chill',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225555238719717376/mikevocalz_Interracial_couple_black_and_white_in_the_living_roo_0f7e6ee4-6b66-4ebc-a9ad-03dc994cd547.png?ex=66218e42&is=660f1942&hm=afd85c1fa4564b2171eecd7aae43da45ba56d43b9cce7f5d94415a9cd9890a29&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: '3',
    title: 'Thank You',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225560510720639026/mikevocalz_rendering_poster_collage_art_MINIMALISM_mustard_and__88971a0f-a8c8-4ee9-87fe-9b125c201b52.png?ex=6621932b&is=660f1e2b&hm=073bdb1a74135e1c06d461c21f6d06f3042eab321b7384596c3d62f48e6ff632&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: '4',
    title: 'Hustle',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225561452358795414/mikevocalz_Large_Steel_door_of_a_club_at_the_front._The_Door_sh_82d4acf6-d488-4b8b-8fc6-54dd285dbcdd.png?ex=6621940c&is=660f1f0c&hm=5dbc61d20a3d26ead3b85efba62228eade8a57ba20047acd15f5e1186c40342e&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: '5',
    title: 'Computer Love',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225562258122346617/mikevocalz_percentage_loading_bar_indicator_with_bar_on_a_compu_3c233623-1af8-426b-bb9c-9c6548bb39ca.png?ex=662194cc&is=660f1fcc&hm=000ba5d7e999678038cbf5328fc348c653747b9d707ffe2a61ed11e2e113c11e&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: '6',
    title: 'Missing Bae',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225563851605540985/mikevocalz_rendering_poster_conceptual_minimalist_photography_b_d3a1eca1-d935-4812-bbd2-6ba48e3d2807.png?ex=66219648&is=660f2148&hm=9d24da34926de0c1909c5d7bd6bdada8c62c9629941926969ee42a5ddd5a5222&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: '7',
    title: 'Heart Broken',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225564751824949368/mikevocalz_valentines_day_with_broken_hearts_heartbreak_sad_no__712ce23a-4cfe-40f2-bc1a-28792ae3f277.png?ex=6621971e&is=660f221e&hm=8444675c251d9cdc253fc5a4b0e5cab4ed38e0227d9b51258063be8ed7e59f4c&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: '8',
    title: 'Dont Be Salty',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225567402931126273/mikevocalz_dont_be_salty._spilled_over_salt_shaker_on_floor._wo_f00b2673-90a9-482e-8824-8583b0a23391.png?ex=66219996&is=660f2496&hm=84164e7a4e7bbbfdb3f089a3a7bca7dbab77b1f775c84c2a7dde1bd83137d2ee&=&format=webp&quality=lossless&width=700&height=700',
  },
]


const conData = [
  {
    id: 1,
    text: 'German Chocolate Cake',
    price: '40',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225569159136542833/mikevocalz_Product_image_of_a_chocolate_cake._Use_a_high-resolu_7934e9b9-47d3-44d8-8764-48eb0926f234.png?ex=66219b39&is=660f2639&hm=9924770f031952403ce9bd1f85043f92c9d0725127662c8409f9dacc8ceeb156&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 2,
    text: 'Chardonnay',
    price: '49.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225571418998046820/mikevocalz_Bottom_Product_packaging_image_of_a_bottle_of_chardo_80e18546-776d-4452-a16a-2f391aacb426.png?ex=66219d54&is=660f2854&hm=2ba2721066d64db695b33f431d8fba8e5a2fe969bf47f480835592bb35ad8ff5&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 3,
    text: 'Roses Assortment',
    price: '25',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225572005160419479/mikevocalz_roduct_packaging_image_of_a_Bouquet_of_roses._Use_a__5755c2c4-c107-4472-b61d-c247a3ac70a0.png?ex=66219de0&is=660f28e0&hm=a2592723debafaa78cdd52878f28e0982bc9480cefb2f4917bd95dbfe994f1df&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 4,
    text: 'Red Wine',
    price: '70',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225572210773721179/mikevocalz_Bottle_Product_packaging_image_of_a_bottle_of_red_wi_39595bc5-5a87-45fc-aa83-cbb56d36b3e1.png?ex=66219e11&is=660f2911&hm=262f4b04cbebf2dd10b982968415de2d30e4b9b385094b7f2a1c8bcb38013f45&=&format=webp&quality=lossless&width=924&height=924',
  },
]

const flixData = [
  {
    id: 1,
    text: 'Bubbly',
    price: '39.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225574550301970442/mikevocalz_Bottle_Product_packaging_image_of_a_bottle_of_bubbly_d11bb724-93a6-4b1e-aad1-70a517d7d946.png?ex=6621a03e&is=660f2b3e&hm=5bbab28df580837a213cb0b2708dc12871823e72b5f6d2ba00152ef41f1b1894&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 2,
    text: '3-Pack Cologne',
    price: '79.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225573403449098401/mikevocalz_Bottle_Product_packaging_image_of_a_Three_bolles_of__31e55470-ad35-4ff8-8d8e-ec4d45afea47.png?ex=66219f2d&is=660f2a2d&hm=bf1edceab5701cddb1d04fe1f4eab096c5232ce97149a9f946077f61bf562f6b&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 3,
    text: '12" Round Cheesecake',
    price: '34.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225574289118334996/mikevocalz_table_top_Product_packaging_image_of_a_strawberry_ch_fd022e97-7dc0-4f0c-9502-36564034f592.png?ex=6621a000&is=660f2b00&hm=568bda96a7b6ab01eeb9e1a0e379ae20572cfcc6951f124b655f18505cb459f2&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 4,
    text: '2-Pack Perfume',
    price: '29.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225573419819728896/mikevocalz_Bottle_Product_packaging_image_of_a_Two_bottles_of_p_1cf81005-9d77-4f6a-91f4-85c2620b5cfd.png?ex=66219f31&is=660f2a31&hm=e66209acbaed08f69ba7bd1ad65d5b2fcf2b0bf6dd59417ac4e2e7018b09a965&=&format=webp&quality=lossless&width=924&height=924',
  },
]

const thanksData = [
  {
    id: 1,
    text: 'Thank You Card',
    price: '5.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225576222508191785/mikevocalz_table_top_Product_packaging_image_of_Thank_You_card._171435de-7191-4874-9723-9b0df16768bb.png?ex=6621a1cd&is=660f2ccd&hm=97a525737adc1e7e76f5539e0ab6f978db03a94d5cda6c97ad643f13dea28158&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 2,
    text: 'Sunflowers',
    price: '29.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225576971581521991/mikevocalz_rpoduct_packaging_image_of_a_Bouquet_of_sunflowers.__f4f6bfa2-4350-41bd-b3d5-7f5e30ee2e23.png?ex=6621a280&is=660f2d80&hm=8fee3e3c9a23a1f998b24b95011f9c9d0175cc2acf8f4f9c44c5ac6fbc89357a&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 3,
    text: 'Vanilla Cake',
    price: '32.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225577299810979880/mikevocalz_table_top_Product_packaging_image_of_a_3_layer_plain_1c294dde-8449-4e54-8f09-3aa313b92ece.png?ex=6621a2ce&is=660f2dce&hm=c5c69cbd0971f781928a395e25784ba89f3e362c5746eb86d77f463884f06642&=&format=webp&quality=lossless&width=924&height=924',
  },
  {
    id: 4,
    text: 'Bottle of Cologne',
    price: '19.99',
    img: 'https://media.discordapp.net/attachments/1184687580650930266/1225578022199885944/mikevocalz_Bottle_Product_packaging_image_of_a_one_bottole_of_c_c1db122b-bf02-4473-993e-00b8bb299ab9.png?ex=6621a37a&is=660f2e7a&hm=8bf31de17ca9908227f3a834252e1100e36cf37f9c1fe23dd1ebf0b0799932b9&=&format=webp&quality=lossless&width=924&height=924',
  },
]


export{
  conData,
  flixData,
  thanksData,
  DATA
}