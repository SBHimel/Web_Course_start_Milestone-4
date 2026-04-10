import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from "../utils/localDB";

/* 🏗️ ২. Context Setup (BookProvider) */

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(()=> getAllReadListFromLocalDB());
  const [wishList, setWishList] = useState(()=> getAllWishListFromLocalDB());

  // useEffect(()=>{
  //   const getReadListFromLocalDB = getAllReadListFromLocalDB()
  //   console.log(getReadListFromLocalDB, "getReadListFromLocalDB")
  //   setReadList(getReadListFromLocalDB)
  // }, []);

  
  const handleMarkAsRead = (currentBook) => {
    //step 1: store book id or store book object
    //step 2: where to store
    //step 3: array or collection
    //step 4: if the book is already exist then show a alert toast
    // step 5: if not then add the book in the array or collection

    addReadListToLocalDB(currentBook)
    

    // console.log(currentBook, "bookId");

    /* ✅ Step 1: Check already আছে কিনা */

    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      /* পুরাতন list + নতুন book add */
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.bookName} "is added to read list"`);

      console.log(currentBook, readList, "Book");
    }
  };

  const handleWishList = (currentBook) => {
    //step 1: store book id or store book object
    //step 2: where to store
    //step 3: array or collection
    //step 4: if the book is already exist then show a alert toast
    // step 5: if not then add the book in the array or collection

    /* Step 1: আগে check → Read list-এ আছে কিনা */

    addWishListToLocalDB(currentBook)


    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error("This book is already in read list");
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} "is added to wish list"`);
    }
    console.log(currentBook, readList, "Book");
  };

  /* 🔄 ৫. Context দিয়ে data pass */
  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
