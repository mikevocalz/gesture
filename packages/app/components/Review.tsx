import { View, Text } from 'react-native'
import React from 'react'
import {Div, Article, Footer, P,A, Aside, H3} from '@expo/html-elements'
import StarRatingComponent from 'react-star-rating-component'


const Review = ({name, title, textOne, textTwo, id, reviewDate, joinDate}) => {
  return (
    <Article className="my-4 w-full rounded-xl bg-gray-200 px-8 py-4">
      <Div className="flex flex-row items-center">
        <img
          className="me-4 h-10 w-10 rounded-full"
          src={`https://picsum.photos/100/100?random=${id}`}
          alt={`Thumbnail ${id}`}
        />
        <Div className="flex flex-row font-medium dark:text-white">
          <P>
            {name || 'User'}
            <time
              datetime={joinDate}
              className="block text-sm text-gray-700 dark:text-gray-400"
            >
              Member since August 2023
            </time>
          </P>
        </Div>
      </Div>
      <Div className="mb-1 flex-row items-center  space-x-4">
        <StarRatingComponent
          name="rate1"
          starColor="#fdbf2e"
          starCount={5}
          value={4}
          onChange={() => null}
        />
        <H3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </H3>
      </Div>
      <Footer className=" text-sm text-gray-500 dark:text-gray-400">
        <P className="space-x-3">
          Reviewed on
          <time className="ml-2 font-bold" datetime="2017-03-03 19:00">
            {reviewDate}
          </time>
        </P>
      </Footer>
      <P className="mb-2 text-lg text-gray-800 dark:text-gray-400">
        {textOne}
      </P>
      <P className="mb-3 text-lg text-gray-800 dark:text-gray-400">
        {textTwo}
      </P>

      <Aside>
        <P className="mt-1 text-xs text-gray-900 dark:text-gray-400">
          {Math.floor(Math.random() * (25 - 2 + 1) + 2)} people found this
          helpful
        </P>
      </Aside>
    </Article>
  )
}

export default Review