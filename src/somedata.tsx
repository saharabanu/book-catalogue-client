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
*/