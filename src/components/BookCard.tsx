/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Link } from "react-router-dom"
import { IBook } from "../types/globalTypes";
import { FC, useEffect , useState} from "react";
import { useCreateReadingListMutation, useCreateWishlistMutation, useRemoveReadingListMutation, useRemoveWishlistMutation } from "../redux/features/book/booksApi";
import { toast } from "react-hot-toast";
interface BookCardProps {
    book: IBook;
  }

const BookCard: FC<BookCardProps> = ({book})=> {
    const { _id, author, genre, publicationDate, title }: IBook = book;
    const [createWishlist, { isLoading: createWishlistLoading }] =
    useCreateWishlistMutation();
  const [removeWishlist, { isLoading: removeWishlistLoading }] =
    useRemoveWishlistMutation();
  const [createReading, { isLoading: createReadingLoading }] =
    useCreateReadingListMutation();
  const [removeReading, { isLoading: removeReadingLoading }] =
    useRemoveReadingListMutation();
  const formattedPublicationDate = new Date(
    publicationDate
  ).toLocaleDateString();

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isAddedToReading, setIsAddedToReading] = useState(false);

  const handleWishlist = () => {
    if (isInWishlist) {
      removeWishlist(_id!)
        .unwrap()
        .then(() => {
          setIsInWishlist(false);
          toast("Removed from Wishlist");
          removeBookFromLocalStorage("wishlist", _id!);
        })
        .catch(() => {
          toast.error("Error removing from Wishlist");
        });
    } else {
      createWishlist(book)
        .unwrap()
        .then(() => {
          setIsInWishlist(true);
          toast.success("Added to Wishlist");
          addBookToLocalStorage("wishlist", _id!);
        })
        .catch(() => {
          toast.error("Error adding to Wishlist");
        });
    }
  };

  const handleAddToReading = () => {
    if (isAddedToReading) {
      removeReading(_id!)
        .unwrap()
        .then(() => {
          setIsAddedToReading(false);
          toast("Removed from Reading List");
          removeBookFromLocalStorage("readingList", _id!);
        })
        .catch(() => {
          toast.error("Error removing from Reading List");
        });
    } else {
      createReading(book)
        .unwrap()
        .then(() => {
          setIsAddedToReading(true);
          toast.success("Added to Reading List");
          addBookToLocalStorage("readingList", _id!);
        })
        .catch(() => {
          toast.error("Error adding to Reading List");
        });
    }
  };

  useEffect(() => {
    setIsInWishlist(checkBookInLocalStorage("wishlist", _id!));
    setIsAddedToReading(checkBookInLocalStorage("readingList", _id!));
  }, [_id]);

  const addBookToLocalStorage = (listKey: string, bookId: string) => {
    const storedList = localStorage.getItem(listKey);
    if (storedList) {
      const list = JSON.parse(storedList);
      list.push(bookId);
      localStorage.setItem(listKey, JSON.stringify(list));
    } else {
      localStorage.setItem(listKey, JSON.stringify([bookId]));
    }
  };

  const removeBookFromLocalStorage = (listKey: string, bookId: string) => {
    const storedList = localStorage.getItem(listKey);
    if (storedList) {
      const list = JSON.parse(storedList);
      const updatedList = list.filter((id: string) => id !== bookId);
      localStorage.setItem(listKey, JSON.stringify(updatedList));
    }
  };

  const checkBookInLocalStorage = (listKey: string, bookId: string) => {
    const storedList = localStorage.getItem(listKey);
    if (storedList) {
      const list = JSON.parse(storedList);
      return list.includes(bookId);
    }
    return false;
  };

  if (
    createWishlistLoading ||
    removeWishlistLoading ||
    createReadingLoading ||
    removeReadingLoading
  ) {
    return <p>Loading .....</p>;
  }



  return (
    <>
    <tbody >
          <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{genre}</td>
            <td>{formattedPublicationDate}</td>
           <td>
           <button onClick={handleWishlist}>
               wishlist
              </button>
           </td>
              <td>
              <button onClick={handleAddToReading}>
                reading
              </button>
              </td>
            <td><Link to={`/book-details/${_id}`}>Details</Link></td>
            <td><Link to="/add-book">ADD NEW BOOK</Link></td>
          </tr>
          </tbody>
         
    
         
    </>
  )
}

export default BookCard