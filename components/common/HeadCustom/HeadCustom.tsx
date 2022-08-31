import Head from 'next/head';
import React from 'react';
import { HeadCustomPropType } from './HeadCustom.d.type';

const HeadCustom = ({headerInfo}:HeadCustomPropType) => {
    const {page_title,author, keywords = [], description, baseURL } = headerInfo;
    return (
        <Head>
            {page_title && <title>{page_title}</title>}
            {author && <meta name="author" content={author} />}
            {keywords.length > 0 && <meta name="keyword" content= {keywords.join(", ")} />}
            {description && <meta name="description" content={description} />}
            {baseURL && <base href={baseURL}></base>}
        </Head>
    );
};

export default HeadCustom;