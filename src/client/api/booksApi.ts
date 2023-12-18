let books = [
  {
    "id": 1,
    "name": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 15.99,
    "category": "Fiction",
    "description": "A novel by F. Scott Fitzgerald set in the summer of 1922. It explores themes of decadence, idealism, and the American Dream.",
  },
  {
    "id": 2,
    "name": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "price": 12.49,
    "category": "Classic",
    "description": "Harper Lee's Pulitzer Prize-winning novel. It addresses the issues of racial injustice and moral growth in the American South.",
  },
  {
    "id": 3,
    "name": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "price": 19.99,
    "category": "Fantasy",
    "description": "J.R.R. Tolkien's classic tale of adventure. Follow Bilbo Baggins as he embarks on a quest to reclaim a stolen treasure guarded by the dragon Smaug.",
  },
  {
    "id": 4,
    "name": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "price": 24.95,
    "category": "Fantasy",
    "description": "The first book in the Harry Potter series by J.K. Rowling. Join Harry, Ron, and Hermione as they discover the magical world at Hogwarts School of Witchcraft and Wizardry.",
  },
  {
    "id": 5,
    "name": "1984",
    "author": "George Orwell",
    "price": 10.99,
    "category": "Dystopian",
    "description": "George Orwell's classic portrayal of a dystopian future. It explores the dangers of totalitarianism and the erosion of truth.",
  },
  {
    "id": 6,
    "name": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "price": 14.75,
    "category": "Coming of Age",
    "description": "J.D. Salinger's influential coming-of-age novel. Follow the adventures of Holden Caulfield as he navigates adolescence in New York City.",
  },
  {
    "id": 7,
    "name": "Pride and Prejudice",
    "author": "Jane Austen",
    "price": 16.50,
    "category": "Romance",
    "description": "Jane Austen's romantic classic. Delve into the world of Elizabeth Bennet and Mr. Darcy as they navigate societal expectations and love.",
  },
  {
    "id": 8,
    "name": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "price": 29.99,
    "category": "Fantasy",
    "description": "The epic fantasy trilogy by J.R.R. Tolkien. Embark on a journey through Middle-earth as Frodo Baggins sets out to destroy the One Ring.",
  },
  {
    "id": 9,
    "name": "The Da Vinci Code",
    "author": "Dan Brown",
    "price": 18.25,
    "category": "Mystery",
    "description": "Dan Brown's bestselling mystery thriller. Join Robert Langdon as he unravels hidden secrets encoded in famous works of art and literature.",
  },
  {
    "id": 10,
    "name": "The Shining",
    "author": "Stephen King",
    "price": 13.99,
    "category": "Horror",
    "description": "Stephen King's classic horror novel. Experience the chilling tale of the Torrance family as they confront supernatural forces at the Overlook Hotel.",
  },
  {
    "id": 11,
    "name": "Jane Eyre",
    "author": "Charlotte Brontë",
    "price": 15.50,
    "category": "Classic",
    "description": "Charlotte Brontë's gothic novel. Follow the life of Jane Eyre as she faces challenges and finds love in the harsh social landscape of 19th-century England.",
  },
  {
    "id": 12,
    "name": "Brave New World",
    "author": "Aldous Huxley",
    "price": 11.99,
    "category": "Dystopian",
    "description": "Aldous Huxley's dystopian masterpiece. Explore a future society where conformity and stability come at the cost of individuality and freedom.",
  },
  {
    "id": 13,
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 20.49,
    "category": "Adventure",
    "description": "Paulo Coelho's philosophical novel. Follow Santiago's journey as he seeks a treasure in the Egyptian pyramids and discovers the importance of following one's dreams.",
  },
  {
    "id": 14,
    "name": "The Hunger Games",
    "author": "Suzanne Collins",
    "price": 16.75,
    "category": "Dystopian",
    "description": "Suzanne Collins' gripping dystopian series. Join Katniss Everdeen as she fights for survival in the annual Hunger Games, a televised event in a post-apocalyptic world.",
  },
  {
    "id": 15,
    "name": "Moby-Dick",
    "author": "Herman Melville",
    "price": 22.99,
    "category": "Adventure",
    "description": "Herman Melville's classic tale of the sea. Captain Ahab's quest for revenge against the white whale, Moby-Dick, explores themes of obsession and fate.",
  },
  {
    "id": 16,
    "name": "Frankenstein",
    "author": "Mary Shelley",
    "price": 17.50,
    "category": "Horror",
    "description": "Mary Shelley's iconic horror novel. Follow Victor Frankenstein's experiment and the consequences of creating life from death.",
  },
  {
    "id": 17,
    "name": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "price": 25.99,
    "category": "Adventure",
    "description": "Alexandre Dumas' thrilling adventure novel. Join Edmond Dantès as he seeks revenge against those who wronged him in this tale of betrayal and redemption.",
  },
  {
    "id": 18,
    "name": "The Chronicles of Narnia",
    "author": "C.S. Lewis",
    "price": 28.25,
    "category": "Fantasy",
    "description": "C.S. Lewis' beloved fantasy series. Enter the magical world of Narnia and follow the adventures of the Pevensie siblings as they battle the White Witch.",
  },
  {
    "id": 19,
    "name": "The Silent Patient",
    "author": "Alex Michaelides",
    "price": 25.99,
    "category": "Psychological Thriller",
    "description": "Alex Michaelides' psychological thriller. Delve into the mysterious case of Alicia Berenson, a woman who shoots her husband and then stops speaking.",
  },
  {
    "id": 20,
    "name": "The Night Circus",
    "author": "Erin Morgenstern",
    "price": 20.75,
    "category": "Fantasy",
    "description": "Erin Morgenstern's enchanting fantasy novel. Step into the magical world of Le Cirque des Rêves, a mysterious circus open only at night.",
  },
  {
    "id": 21,
    "name": "Educated",
    "author": "Tara Westover",
    "price": 21.99,
    "category": "Memoir",
    "description": "Tara Westover's memoir. Follow the journey of a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education.",
  },
  {
    "id": 22,
    "name": "The Odyssey",
    "author": "Homer",
    "price": 18.99,
    "category": "Adventure",
    "description": "Homer's epic poem. Join Odysseus on his journey home from the Trojan War, encountering mythical creatures and challenges along the way.",
  },
  {
    "id": 23,
    "name": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "price": 22.50,
    "category": "Magical Realism",
    "description": "Gabriel García Márquez's masterpiece. Explore the multi-generational Buendía family and the magical town of Macondo.",
  },
  {
    "id": 24,
    "name": "The Catch-22",
    "author": "Joseph Heller",
    "price": 16.75,
    "category": "Satire",
    "description": "Joseph Heller's satirical novel. Follow the absurdities of war and bureaucracy in the fictionalized World War II setting of Pianosa.",
  },
  {
    "id": 25,
    "name": "Dracula",
    "author": "Bram Stoker",
    "price": 19.95,
    "category": "Gothic Horror",
    "description": "Bram Stoker's gothic horror classic. Experience the vampire Count Dracula's attempt to move from Transylvania to England to spread the undead curse.",
  },
  {
    "id": 26,
    "name": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "price": 15.25,
    "category": "Science Fiction",
    "description": "Douglas Adams' comedic science fiction series. Join Arthur Dent as he explores space after Earth's destruction and learns about the Hitchhiker's Guide.",
  },
  {
    "id": 27,
    "name": "Wuthering Heights",
    "author": "Emily Brontë",
    "price": 21.99,
    "category": "Gothic Romance",
    "description": "Emily Brontë's gothic romance novel. Delve into the passionate and destructive love story between Heathcliff and Catherine Earnshaw.",
  },
  {
    "id": 28,
    "name": "Siddhartha",
    "author": "Hermann Hesse",
    "price": 17.49,
    "category": "Philosophical",
    "description": "Hermann Hesse's philosophical novel. Follow Siddhartha's spiritual journey to enlightenment in ancient India.",
  },
  {
    "id": 29,
    "name": "The Road",
    "author": "Cormac McCarthy",
    "price": 24.50,
    "category": "Post-Apocalyptic",
    "description": "Cormac McCarthy's post-apocalyptic novel. Join a father and son as they navigate a desolate and dangerous world in search of safety.",
  },
  {
    "id": 30,
    "name": "The Jungle Book",
    "author": "Rudyard Kipling",
    "price": 14.95,
    "category": "Children's Literature",
    "description": "Rudyard Kipling's collection of stories. Follow the adventures of Mowgli, a young boy raised by wolves in the Indian jungle.",
  },
  {
    "id": 31,
    "name": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "price": 19.99,
    "category": "Adventure",
    "description": "Ernest Hemingway's novella. Join Santiago, an aging Cuban fisherman, as he battles a giant marlin in the Gulf Stream.",
  },
  {
    "id": 32,
    "name": "The Scarlet Letter",
    "author": "Nathaniel Hawthorne",
    "price": 16.25,
    "category": "Historical Fiction",
    "description": "Nathaniel Hawthorne's historical novel. Explore the consequences of adultery and the complexities of morality in 17th-century Puritan Massachusetts.",
  },
  {
    "id": 33,
    "name": "A Clockwork Orange",
    "author": "Anthony Burgess",
    "price": 20.75,
    "category": "Dystopian",
    "description": "Anthony Burgess' dystopian novel. Follow the ultraviolent exploits of Alex in a future society that seeks to control behavior through psychological conditioning.",
  },
  {
    "id": 34,
    "name": "The Three Musketeers",
    "author": "Alexandre Dumas",
    "price": 22.99,
    "category": "Adventure",
    "description": "Alexandre Dumas' classic adventure novel. Join d'Artagnan and the Three Musketeers as they embark on swashbuckling adventures in 17th-century France.",
  },
  {
    "id": 35,
    "name": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "price": 18.49,
    "category": "Social Commentary",
    "description": "John Steinbeck's social commentary novel. Follow the Joad family as they journey westward during the Great Depression in search of a better life.",
  },
  {
    "id": 36,
    "name": "The Art of War",
    "author": "Sun Tzu",
    "price": 15.99,
    "category": "Military Strategy",
    "description": "Sun Tzu's ancient Chinese treatise on military strategy. Learn timeless principles for success on the battlefield and in life.",
  },
  {
    "id": 37,
    "name": "The Princess Bride",
    "author": "William Goldman",
    "price": 17.99,
    "category": "Fantasy",
    "description": "William Goldman's fantasy novel. Experience the adventures of Buttercup and Westley, filled with romance, humor, and swashbuckling.",
  },
  {
    "id": 38,
    "name": "The Sun Also Rises",
    "author": "Ernest Hemingway",
    "price": 21.25,
    "category": "Modernist",
    "description": "Ernest Hemingway's modernist novel. Join the expatriate community in 1920s Paris as they grapple with the aftermath of World War I.",
  },
  {
    "id": 39,
    "name": "The Color Purple",
    "author": "Alice Walker",
    "price": 19.95,
    "category": "Historical Fiction",
    "description": "Alice Walker's historical novel. Explore the life of Celie, an African American woman in the Southern United States, as she navigates love and oppression.",
  },
  {
    "id": 40,
    "name": "Jurassic Park",
    "author": "Michael Crichton",
    "price": 23.50,
    "category": "Science Fiction",
    "description": "Michael Crichton's science fiction thriller. Visit the fictional Isla Nublar, where dinosaurs roam freely in a theme park created by genetic engineering.",
  }
];

export interface Book {
  name: string;
  author: string;
  price: number;
  category: string;
  description: string;
}

export interface FullBook extends Book {
  id: number;
}

export const fetchBooks = (): Promise<FullBook[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 1000);
  });
};

export const fetchBook = (id: number): Promise<FullBook | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = books.find(book => book.id === id);
      resolve(book);
    }, 1000);
  });
};

export const addBook = (book: Book): Promise<FullBook> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newBook = { ...book, id: Math.max(...books.map(b => b.id)) + 1 };
      books = [...books, newBook];
      resolve(newBook);
    }, 1000);
  });
};

export const updateBook = (updatedBook: FullBook): Promise<FullBook> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      books = books.map(book => book.id === updatedBook.id ? updatedBook : book);
      resolve(updatedBook);
    }, 1000);
  });
};

export const deleteBook = (id: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      books = books.filter(book => book.id !== id);
      resolve();
    }, 1000);
  });
};
