/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { toast } from "react-hot-toast/headless";
import BookCard from "../components/BookCard";
import { useGetReadingListQuery } from "../redux/features/book/booksApi";
import { IBook } from "../types/globalTypes";


const ReadingSoon = () => {
    const { data, isLoading, isError, isSuccess } = useGetReadingListQuery(null);

    if (isLoading) {
      return <p>Loading....</p>;
    }
  
    if (isError) {
      toast.error("Something went wrong");
    }
  
    return isSuccess ? (
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1">
          <div className="py-16">
            <div className="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20">
              <div>
                <h2 className="mt-4 text-center text-2xl font-bold text-gray-900  md:text-4xl">
                  Plan To Reading <br className="sm:block" hidden />
                  These Books
                </h2>
                loading....
              </div>
              {data?.data.length > 0 ? (
                <div className="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
                  {data?.data.map((book: IBook) => (
                    <BookCard book={book} key={book._id} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-900">
                  Your Reading list is empty.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    ) : null;
}

export default ReadingSoon