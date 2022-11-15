import React from 'react'

export default function home({ data }) {
    return (
        <>
            <section>
                {data.map(({ title, id }) => {
                    return <h1 key={id}>{id} : {title}</h1>
                })}
            </section>
        </>
    )
}


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}