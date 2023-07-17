/*
const [bookInfo, setBookInfo] = useState({
    title: data.title,
    author: data.author,
    genre: "",
    publicationDate: ""
});
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    const response: any = await editBook({ id: id, 
        title: data.title,
                     author:data.author,
                   genre: data.genre,
                    publicationDate:data.publicationDate});
   
  };
   onChange={handleInputChange}



   //   let bookData: null = null;
//   if (id) {
//     //const { data } = useGetSingleBookQuery(id);
//     bookData = data?.book;
//   }

  // Update the bookInfo state when the bookData changes
  // useEffect(() => {
  //   if (data) {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //     setBookInfo(data);
  //   }
  // }, [data, id]);



  // if(data){
        //     toast.success('book added successfully')
        //     navigate('/all-books')
        //   }
        //   else{
        //     toast.error('something went wrong')
        //   }


        if (!isLoading && !isError && data?.data?.length > 0) {
        content = data?.data?.map((book:IBook) =>(<tbody key={book.title}>
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.publicationDate}</td>
            <td><Link to={`/book-details/${book._id}`}>Details</Link></td>
            <td><Link to="/add-book">ADD NEW BOOK</Link></td>
          </tr>
          </tbody>));
    }



    let content = null;

    if (isLoading) {
        content = (
            <>
              <Spinner animation="border" variant="danger" />
            </>
        );
    }

    if (!isLoading && isError) {
        content = 'Something is wrong';
    }

    if (!isLoading && !isError && data?.data?.length === 0) {
        content = "No Books found!" ;
    }
*/