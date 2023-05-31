const availableTimeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
    { time: "5:00 PM", available: true }
  ];
  
  export const barber_data = [
    {
      id: "A1B2C3D4E",
      name: "John Doe",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      id: "F5G6H7I8J",
      name: "Jane Smith",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "Nulla facilisi. Mauris ac semper felis.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      id: "K9L0M1N2O",
      name: "Mike Johnson",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      id: "P3Q4R5S6T",
      name: "Anna Williams",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "Etiam volutpat mauris id felis pellentesque, nec elementum nunc porttitor.",
      availableTimeSlots: [
        { time: "9:00 AM", available: false },
        { time: "11:00 AM", available: true },
        { time: "1:00 PM", available: false },
        { time: "3:00 PM", available: true },
        { time: "5:00 PM", available: false }
      ]
    },
    {
      id: "U7V8W9X0Y",
      name: "Robert Davis",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "Fusce dignissim elit eget tortor auctor, et faucibus urna pretium.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      id: "Z1A2B3C4D",
      name: "Emily Wilson",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      availableTimeSlots: [
        { time: "10:00 AM", available: false },
        { time: "11:00 AM", available: false },
        { time: "2:00 PM", available: false },
        { time: "3:00 PM", available: false },
        { time: "4:00 PM", available: false }
      ]
    },
    {
      id: "E5F6G7H8I",
      name: "David Thompson",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "In condimentum mauris eget volutpat scelerisque. Nam feugiat ante a elit vulputate, a vulputate est semper.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      id: "J9K0L1M2N",
      name: "Olivia Lee",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "Curabitur laoreet arcu vel elit iaculis, vitae mattis risus hendrerit.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      id: "O3P4Q5R6S",
      name: "Samuel Wright",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU",
      description: "Ut at finibus mauris. Fusce vehicula risus id tortor hendrerit, sed egestas quam tincidunt.",
      availableTimeSlots: [
        { time: "9:00 AM", available: true },
        { time: "10:00 AM", available: true },
        { time: "11:00 AM", available: true },
        { time: "12:00 PM", available: true },
        { time: "1:00 PM", available: false },
        { time: "2:00 PM", available: false },
        { time: "3:00 PM", available: false },
        { time: "4:00 PM", available: false },
        { time: "5:00 PM", available: false }
      ]
    }
  ];