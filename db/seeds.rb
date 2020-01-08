Pledge.create!([
  {backer_id: 3, pledge_level_id: 1, quantity: 5},
  {backer_id: 3, pledge_level_id: 4, quantity: 2},
  {backer_id: 4, pledge_level_id: 4, quantity: 1},
  {backer_id: 4, pledge_level_id: 1, quantity: 1},
  {backer_id: 4, pledge_level_id: 1, quantity: 1},
  {backer_id: 4, pledge_level_id: 2, quantity: 1}
])
PledgeLevel.create!([
  {project_id: 1, quantity: 1000, rate: 1, title: "Show Your Support", description: "na", delivery_date: "2020-01-08"},
  {project_id: 1, quantity: 100, rate: 10, title: "Gold", description: "na", delivery_date: "2020-01-08"},
  {project_id: 1, quantity: 10, rate: 100, title: "Plat", description: "na", delivery_date: "2020-01-08"},
  {project_id: 2, quantity: 1000, rate: 1, title: "Show Your Support", description: "na", delivery_date: "2020-01-08"},
  {project_id: 2, quantity: 50, rate: 200, title: "Epic", description: "na", delivery_date: "2020-01-08"}
])
Project.create!([
  {title: "project02", creator_id: 1, category: "art", due_date: "2020-01-07 18:57:24", body: "na", thumbnail: nil, video_link: nil},
  {title: "project03", creator_id: 2, category: "technology", due_date: "2020-01-07 18:57:54", body: "na", thumbnail: nil, video_link: nil},
  {title: "project01", creator_id: 1, category: "technology", due_date: "2020-01-07 18:56:03", body: "naaaa", thumbnail: nil, video_link: nil}
])
User.create!([
  {name: "test02", email: "test02@email.com", password_digest: "$2a$12$GAz1Z7gRdyZBBMh/5q3zGeA2r7gqvm2tGUWKzGMcQ00gPWyCyJ4le", session_token: "Nb2RPxXsigxskrW-htfyqQ", biography: nil, avatar: nil},
  {name: "test03", email: "test03@yahoo.com", password_digest: "$2a$12$JPfb1k/6fDwUjDwR9pf6b.I.gEWolmYNfTrlmv9Vr9s0sh4Rn4kc6", session_token: "-fOx7w30FNeQ4XR-bfqsYA", biography: nil, avatar: nil},
  {name: "test01", email: "test01@email.com", password_digest: "$2a$12$DCiB86s5iXq.WzEc0pa6Q.wanvlVlk2NuTTpGcuY3ACGo6XR4I1jO", session_token: "H8jGvGbO-VZ3etcvnuMyfg", biography: nil, avatar: nil},
  {name: "Test", email: "test04@gmail.com", password_digest: "$2a$12$EALo56NUwCEYKVw55Xl/heKSIKTtE5L.fDzLU/DVUCxBUKD6xjXVy", session_token: "KAClIdlL20K4SiEetC62kA", biography: nil, avatar: nil}
])
