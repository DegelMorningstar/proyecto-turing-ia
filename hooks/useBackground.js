import { useEffect, useState } from "react";
import { headers } from '../__mocks__/headers';

export const useBackground = (page) => {
    const [background, setbackground] = useState({
        id: '',
        title: '',
        text: '',
        videoUrl: ''
    });
    
      const [isLoaded, setIsLoaded] = useState(false);
    
      const getBackground = () => {
        const bg = headers.find(element => element.id === page);
        setbackground(bg);
        setIsLoaded(true);
      }
    
      useEffect(() => {
        getBackground();
      }, []);

      return {
        background,
        isLoaded
      }
}
