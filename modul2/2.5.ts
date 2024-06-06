{

    // function with Generic

    //  way 1 to implement function by general way 
   const createArray = (param: string) : string[] => {
       return [param]
    }
    // this above code return 'Bangladesh' because i putted value \bangladesh in creatArray 
       const res1 = createArray('Bangladesh')


    // here way 2 to implement function in dynamic by usign [Generic] 
      const createArrayWithGeneric = <T>(param: T) : T[] => {
        return[param]
    }
    const res2 = createArrayWithGeneric<string>('Bangladesh');


     type user4 = {
        id: number;
        name: string; 
     }

   const createGenericWithObj = createArrayWithGeneric<user4> => (
    {
        id: 4557,
        name: 'anythibng'
    }
   )















}