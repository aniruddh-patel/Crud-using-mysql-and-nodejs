import express from "express"
const router= express.Router()


const arr = [
  {
    id: 1,
    name: "Ava Morgan",
    email: "ava.morgan@example.com",
    password: "P@ssw0rd!23",
  },
  {
    id: 2,
    name: "Liam Patel",
    email: "liam.patel@example.org",
    password: "BlueSky#77",
  },
  {
    id: 3,
    name: "Noah Kim",
    email: "noah.kim@example.net",
    password: "sunrise_456",
  },
  {
    id: 4,
    name: "Emma Garcia",
    email: "emma.garcia@example.com",
    password: "Guitar!9",
  },
  {
    id: 5,
    name: "Olivia Brown",
    email: "olivia.brown@example.org",
    password: "Olive-2024",
  },
  {
    id: 6,
    name: "Sophia Rossi",
    email: "sophia.rossi@example.net",
    password: "S0phia$Ace",
  },
  {
    id: 7,
    name: "Mason Johnson",
    email: "mason.johnson@example.com",
    password: "Mason#321",
  },
  {
    id: 8,
    name: "Isabella Lee",
    email: "isabella.lee@example.org",
    password: "TeaTime!88",
  },
  {
    id: 9,
    name: "Ethan Nguyen",
    email: "ethan.nguyen@example.net",
    password: "Ethan@Local1",
  },
  {
    id: 10,
    name: "Charlotte Kim",
    email: "charlotte.kim@example.com",
    password: "Ch@rL0tt3",
  },
  {
    id: 11,
    name: "Lucas Silva",
    email: "lucas.silva@example.org",
    password: "Luca$Silva9",
  },
  {
    id: 12,
    name: "Mia Thompson",
    email: "mia.thompson@example.net",
    password: "Mia-!Pass5",
  },
];

router.get("/all", (req, res) => {
  try {
    const data = arr.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
    res.status(200).json({ success: true, message: data });
  } catch (error) {
    res.status(500).json({ success: false, error: "unable to fetchvdata" });
  }
});

router.post("/newuser", (req, res) => {
  try {
    const { name, email,password} = req.body;    
    const newUser = {
      id: arr.length + 1,
      name,
      email,
      password,
    };
    arr.push(newUser);
    res.status(201).json({ success: true, message: "user created" });
  } catch (error) {
    res.status(500).json({ success: false, error: "unable to create user" });
  }
});

router.put("/user/:id", (req, res) => {
    try {
        const id=parseInt(req.params.id);
        console.log(id);
        
        const index = arr.findIndex((user) => user.id === id);
        if (index === -1) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    const name=req.body.name;
    arr[index].name = name;
    res.status(200).json({ success: true, message: "User name updated" });
    } catch (error) {
        
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

router.delete("/user/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = arr.findIndex((user) => user.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    arr.splice(index, 1);
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router