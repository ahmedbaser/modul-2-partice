{

// interface -----> generic

interface Developer<T,  X = null>  {
  name: string;
  Computer: {
    brand: string;
    model: string;
    releaseYear: number;
  }
  smartWatch: T;
  bike?: X;
}


type meWatch = {
    name: string;
    model: string;
    display: string;
}

const poorDeveloper : Developer<meWatch> = {
     name: 'baser',
     Computer: {
      brand: 'Asus',
      model: "CX-24533",
      releaseYear: 2013,

     },
     smartWatch: {
      name: 'Emilab',
      model: 'kw35',
      display: 'OLED',

    }
     
    }


    //---------------------//---------------------//

    interface  AppleWatch {
      brand: string;
      model: string;
      heartTrack: boolean;
      sleepTrack: boolean;

    }

    interface YemaBike {
     model: string;
     engineCapacity: string;
    }



    const richDeveloper : Developer<AppleWatch, YemaBike> = {
      name: 'Baser',
      Computer: {
        brand: 'apple',
        model: 'MackBook Air',
        releaseYear: 2015,
      },
      smartWatch : {
        brand: "Apple Watch",
        model: 'something',
        heartTrack: true,
        sleepTrack: true,
      },

     bike : {
      model: 'Yemaha',
      engineCapacity: '100cc',
     }

    }

















}