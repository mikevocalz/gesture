'use client'
import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { sanityClientWeb} from './../sanity/sanityClient.web';
import { sanityClientNative } from './../sanity/sanityClient';

const sanityClient = Platform.OS === 'web' ? sanityClientWeb : sanityClientNative

const useSanity = (query: string, params?: Record<string, any>) => {
  const [productData, setProductData] = useState<any>(null);
    const [heroData, setHeroData] = useState<any>(null);
  const [categoryData, setCategoryData] = useState<any>(null);

    const [isProductsLoading, setIsProductsLoading] = useState<boolean>(true);
        const [isCategoriesLoading, setIsCategoriesLoading] = useState<boolean>(true);
    const [isHeroLoading, setIsHeroLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await sanityClient.fetch(query, params);
        setCategoryData(categories)
        const products = await sanityClient.fetch(query, params);
        setProductData(products)
        const hero = await sanityClient.fetch(query, params);
        setHeroData(hero)

        setIsHeroLoading(false);
        setIsCategoriesLoading(false);
        setIsProductsLoading(false)
      } catch (err) {
        setError('An error occurred while fetching data');
        setIsHeroLoading(false);
        setIsCategoriesLoading(false);
        setIsProductsLoading(false)
        console.error(err);
      }
    };

    fetchData();
  }, [query, params]);

  return { productData, heroData, categoryData, isHeroLoading, isCategoriesLoading, isProductsLoading, error };
};

export default useSanity