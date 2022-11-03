
user1 = User.create(username: "Cole", email: "cole.mars@gmail.com", password_digest: "mynameiscole", first_name: "Cole", last_name: "Mars")
user2 = User.create(username: "Tyler", email: "tyler.paul@gmail.com", password_digest: "mynameistyler", first_name: "Tyler", last_name: "Paul")
user3 = User.create(username: "Faye", email: "faye.bail@gmail.com", password_digest: "mynameisfaye", first_name: "Faye", last_name: "Bail")
user4 = User.create(username: "Claire", email: "claire.browning@gmail.com", password_digest: "mynameisclaire", first_name: "Claire", last_name: "Browning")
user5 = User.create(username: "Onyx", email: "onyx.river@gmail.com", password_digest: "mynameisonyx", first_name: "Onyx", last_name: "River")
user6 = User.create(username: "Tulip", email: "tulip.mast@gmail.com", password_digest: "mynameistulip", first_name: "Tulip", last_name: "Mast")

puts "user done"

style1 = Style.create(style: "Realism", descript:"Realism has been one of the most popular types of painting styles since the Renaissance. Most people consider it the “real art” for its closer-to-life depiction of the subjects. These paintings appear just like photographs, featuring smooth textures and a perfect composition of light and dark. Moreover, realist paintings have little to no stylizations.", img: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/435904/795798/main-image" )
style2 = Style.create(style: "Impressionism", descript:"Originating in Paris in the late 19th century, impressionism was all about bold strokes of the brush and unusual angles. This style of art presented its subject in a vibrant and unique style without distorting its realistic appearance. Artists who adopted this painting style refrained from using the black color in their pieces and instead focused on capturing the light.", img: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/438001/796186/main-image" )
style3 = Style.create(style: "Abstract", descript:"Rejecting the idea of realism, abstract art relies on lines, textures, shapes, and colors to illustrate the essence of its subject. Starting in the 1950s as the Abstract Expressionist movement, this particular painting style may look like a mess to some, but it allows you to interpret the shapes and forms on the canvas as per your liking.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hilma_af_Klint_Svanen.jpg/1024px-Hilma_af_Klint_Svanen.jpg" )
style4 = Style.create(style: "Modernism", descript:"Modernist art also originated in the late 19th century. It shunned realism and rejected the conservative values in art by adopting a more innovative and creative approach. Though considered radical at the time, modernism focused on experimenting with different textures, colors and forms. It essentially had no boundaries, allowing the artist to express themselves uniquely.", img: "https://vilcek.org/wp-content/uploads/2021/07/Crawford-USS-Nevada.jpg" )
style5 = Style.create(style: "Surrealism", descript:"The surrealist movement began to gain footing in the 20th century. It focuses on portraying its subjects more realistically while completely removing them from their typical surroundings. Instead, this painting style imagines them in almost paradoxical settings.", img: "/Users/kennethlatour/Development/code/phase-5/example-project/components/Screen Shot 2022-11-02 at 1.16.49 PM.png" )

Painter.create( style_id: style1.id, painter: "Gustave Courbet", img: "https://1.bp.blogspot.com/-5zcXggz5Om8/YM5INRIdJ_I/AAAAAAACnIA/fy-Yy5qHraE8uW3kgHjfT9LrKLk4VtcdQCLcBGAsYHQ/s16000/Gustave%2BCOURBET%2B%25281819-1877%2529%2BThe%2BGrain%2BSifters%252C%2B1855%2B-%2BCatherine%2BLa%2BRose%2B%25282%2529.jpg")
Painter.create( style_id: style2.id, painter: "Edgar Degas", img: "https://artfilemagazine.com/wp-content/uploads/2022/08/Iconic-Impression-Painter.jpg")
Painter.create( style_id: style3.id, painter: "Piet Mondrian", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tableau_I%2C_by_Piet_Mondriaan.jpg/1024px-Tableau_I%2C_by_Piet_Mondriaan.jpg")
Painter.create( style_id: style4.id, painter: "Pablo Picasso", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Pablo_Picasso%2C_1905%2C_Au_Lapin_Agile_%28At_the_Lapin_Agile%29%2C_oil_on_canvas%2C_99.1_x_100.3_cm%2C_Metropolitan_Museum_of_Art.jpg/1024px-Pablo_Picasso%2C_1905%2C_Au_Lapin_Agile_%28At_the_Lapin_Agile%29%2C_oil_on_canvas%2C_99.1_x_100.3_cm%2C_Metropolitan_Museum_of_Art.jpg")
Painter.create( style_id: style5.id, painter: "Salvador Dalí", img: "https://da8t9y7300ntx.cloudfront.net/wp-content/uploads/sites/6/2020/02/The-Persistence-of-Memory.jpg")


Taste.create(user_id: user1.id, style_id: style3.id)
Taste.create(user_id: user3.id, style_id: style1.id)
Taste.create(user_id: user3.id,style_id: style5.id)
Taste.create(user_id: user3.id, style_id: style4.id)
Taste.create(user_id: user2.id, style_id: style5.id)
Taste.create(user_id: user2.id, style_id: style4.id)
Taste.create(user_id: user6.id, style_id: style2.id)
Taste.create(user_id: user6.id, style_id: style5.id)
Taste.create(user_id: user5.id, style_id: style4.id)

puts user1

puts "done"