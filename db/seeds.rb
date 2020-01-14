User.create!([
  {name: "Demo User", email: "demo_user@email.com", password_digest: "$2a$12$CvTrWLNWn1Jg7YZdnk2Bp.plItQSgbTcgYK5J4HXX29ZRg7Fz9iG6", session_token: "sWT4Z8V8UK0S5U25nXG-Rg", biography: nil, avatar: nil},
  {name: "Creator 01", email: "creator01@gmail.com", password_digest: "$2a$12$V85M8EH9DQINwOGnYvsXOujGlowWYuusY/YlTAbK.Vjp5ST4j8No2", session_token: "56bSuazyShajJhf4iCquxA", biography: nil, avatar: nil},
  {name: "Creator 02", email: "creator02@gmail.com", password_digest: "$2a$12$MbTLyYtbTezgg6LWX633tO3hUIk.R4DqlnVEVBP/B4rriQ2Q.OjMK", session_token: "NTZC75yDlvGQJGNCUTOs9g", biography: nil, avatar: nil},
  {name: "Creator 03", email: "creator03@gmail.com", password_digest: "$2a$12$7SIHFea4/WE0FLoUDHMpreKIIXiyFnvAHIE2dcJRPUPTDFf4SL3EG", session_token: "vi2m8P_ORSKsAEoDimztPQ", biography: nil, avatar: nil},
  {name: "Backer 01", email: "backer01@gmail.com", password_digest: "$2a$12$OwFn8FtcD8F/Bye6nEl73ul/N1gYtOdz9ZaIKqtX5k6Ga/rVmSq3S", session_token: "1qQT6w3eHLp1D_SX2IDCdQ", biography: nil, avatar: nil},
  {name: "Backer 02", email: "backer02@gmail.com", password_digest: "$2a$12$pBXttlyrcxCL90KofitFcOy092iyVB3qXbkj2bGFuGKtqW6twg/by", session_token: "zXxHI6EdIrbwBGmqpn1Jqw", biography: nil, avatar: nil},
  {name: "Backer 03", email: "backer03@gmail.com", password_digest: "$2a$12$yg/xkvzGXC4Id4kBa/4lNence.i8LGuf4rhaSSZ6KJG9i.Hk9/ilK", session_token: "O6OAPaJcqV0OLuvNG77o7g", biography: nil, avatar: nil}
])

Project.create!([
  {title: "Rubi: The Wayward Mira", subtitle: "A 2D action platformer game teeming with lush pixels", creator_id: 2, category: "games", target: 5000, due_date: "2020-02-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://ksr-ugc.imgix.net/assets/026/507/804/461fc5b57c1c1d017d8b607776fbb7bc_original.png?ixlib=rb-2.1.0&w=680&fit=max&v=1568726565&auto=format&gif-q=50&lossless=true&s=fad5832f3e796fbee190a8412a2a84be"},
  {title: "Arknights", subtitle: "As long as we are together, this winter is not cold", creator_id: 3, category: "games", target: 10000, due_date: "2020-03-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/75635930_1168350233364193_4638528503170465792_n.png?_nc_cat=109&_nc_ohc=nj3vNJI-JOsAQmsukkUDKJZTxgA-QkcoT2NNLtkRCYHmex7vn4JFvaXJA&_nc_ht=scontent-sjc3-1.xx&oh=507418ee2746cb8840011ab18b35b69d&oe=5EA85B67"},
  {title: "New Album by Chamberlain", subtitle: "Working hard on a new LP entitled RED WEATHER.", creator_id: 4, category: "music", target: 1000, due_date: "2020-04-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://ksr-ugc.imgix.net/assets/027/018/273/c042fcec44b4a6b645443b00d080d769_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1572370638&auto=format&gif-q=50&q=92&s=532212e8c897a50a2419e4670d3fca6a"},
  {title: "Skill Board - Master Your Balance", subtitle: "Skill Board is the most challenging, fun.", creator_id: 2, category: "games", target: 5000, due_date: "2020-02-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://ksr-ugc.imgix.net/assets/027/503/669/623aa40381a1e7381bb8c72e61e2bfae_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1576307802&auto=format&gif-q=50&q=92&s=184a862f742c0fd20225d9bad0dc20f7"},
  {title: "Ode Brew Grinder | Café Performance For Your Countertop", subtitle: "A powerful and precise home grinder with café capabilities that reduces mess and noise.", creator_id: 3, category: "games", target: 10000, due_date: "2020-03-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://ksr-ugc.imgix.net/assets/027/405/143/34b6b15b33ed5eb9e55afaa08affe40d_original.png?ixlib=rb-2.1.0&w=680&fit=max&v=1575357709&auto=format&gif-q=50&lossless=true&s=dd6c7967447e85bf908145cf3e0c6b79"},
  {title: "Oxeye London - by Sven-Hanson Britt", subtitle: "Oxeye will be starting a residency in London!", creator_id: 4, category: "technology", target: 1000, due_date: "2020-04-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://ksr-ugc.imgix.net/assets/027/018/273/c042fcec44b4a6b645443b00d080d769_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1572370638&auto=format&gif-q=50&q=92&s=532212e8c897a50a2419e4670d3fca6a"},
  {title: "Progress Tracker Auto Check-in Hacks", subtitle: "Never get another stirkes again", creator_id: 2, category: "games", target: 5000, due_date: "2020-02-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://ksr-ugc.imgix.net/assets/026/507/804/461fc5b57c1c1d017d8b607776fbb7bc_original.png?ixlib=rb-2.1.0&w=680&fit=max&v=1568726565&auto=format&gif-q=50&lossless=true&s=fad5832f3e796fbee190a8412a2a84be"},
  {title: "Darknights", subtitle: "As long as we are together, this winter is not cold", creator_id: 3, category: "games", target: 10000, due_date: "2020-03-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/75635930_1168350233364193_4638528503170465792_n.png?_nc_cat=109&_nc_ohc=nj3vNJI-JOsAQmsukkUDKJZTxgA-QkcoT2NNLtkRCYHmex7vn4JFvaXJA&_nc_ht=scontent-sjc3-1.xx&oh=507418ee2746cb8840011ab18b35b69d&oe=5EA85B67"},
  {title: "Enimem Dissback at Nick Cannon", subtitle: "Funding for the Em to diss back", creator_id: 4, category: "music", target: 1000, due_date: "2020-04-07 18:57:24", body: "Rubi: The Wayward Mira is a 2D action-platformer game based in a lush pixel world where science and magic come together. Featuring ability-based progression, Rubi is a Metroidvania at its core, but features nonlinear gameplay with multiple playstyles and endings.", image_url: "https://ksr-ugc.imgix.net/assets/027/018/273/c042fcec44b4a6b645443b00d080d769_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1572370638&auto=format&gif-q=50&q=92&s=532212e8c897a50a2419e4670d3fca6a"}
])


PledgeLevel.create!([
  {project_id: 1, quantity: 1000, minimum: 10, title: "Silver", description: "Support the Campaign and Join the Community!", estimated_delivery: "Feb 2020"},
  {project_id: 1, quantity: 100, minimum: 100, title: "Gold", description: "A huge thank you from the creator! Together we can change the world!", estimated_delivery: "Feb 2020"},
])

Pledge.create!([
  {backer_id: 1, pledge_level_id: 1, amount: 100},
  {backer_id: 2, pledge_level_id: 3, amount: 200},
  # {backer_id: 2, pledge_level_id: 5, amount: 500},
  # {backer_id: 2, pledge_level_id: 7, amount: 1000},
  # {backer_id: 2, pledge_level_id: 1, amount: 100},
  # {backer_id: 3, pledge_level_id: 3, amount: 450},
  # {backer_id: 3, pledge_level_id: 5, amount: 600},
  # {backer_id: 4, pledge_level_id: 7, amount: 1000},
  # {backer_id: 4, pledge_level_id: 1, amount: 2000},
  # {backer_id: 5, pledge_level_id: 2, amount: 500},
  # {backer_id: 5, pledge_level_id: 6, amount: 100},
  # {backer_id: 5, pledge_level_id: 9, amount: 350},
  # {backer_id: 6, pledge_level_id: 8, amount: 300},
  # {backer_id: 6, pledge_level_id: 3, amount: 1000},
  # {backer_id: 7, pledge_level_id: 5, amount: 400},
  # {backer_id: 7, pledge_level_id: 8, amount: 5000},
  # {backer_id: 7, pledge_level_id: 9, amount: 1200}
])