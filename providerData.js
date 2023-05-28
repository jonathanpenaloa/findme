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
  
  export const provider_data = [
    {
      name: "John Doe",
      img: "john.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      name: "Jane Smith",
      img: "jane.jpg",
      description: "Nulla facilisi. Mauris ac semper felis.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      name: "Mike Johnson",
      img: "mike.jpg",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      name: "Anna Williams",
      img: "anna.jpg",
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
      name: "Robert Davis",
      img: "robert.jpg",
      description: "Fusce dignissim elit eget tortor auctor, et faucibus urna pretium.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      name: "Emily Wilson",
      img: "emily.jpg",
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
      name: "David Thompson",
      img: "david.jpg",
      description: "In condimentum mauris eget volutpat scelerisque. Nam feugiat ante a elit vulputate, a vulputate est semper.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      name: "Olivia Lee",
      img: "olivia.jpg",
      description: "Curabitur laoreet arcu vel elit iaculis, vitae mattis risus hendrerit.",
      availableTimeSlots: [...availableTimeSlots]
    },
    {
      name: "Samuel Wright",
      img: "samuel.jpg",
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