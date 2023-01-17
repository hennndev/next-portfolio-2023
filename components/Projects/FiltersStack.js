import { useRouter } from 'next/router'

const FiltersStack = () => {

    const router = useRouter()
    const handleRoute = (route) => {
        router.push(`/projects/${route}`)
    }
    const queries = router.query
      
    return (
        <div className='flex_center flex-wrap mb-[30px]'>
            <div className={`${router.pathname === '/projects' ? 'active_stack' : ''} filter_stack`} onClick={() => handleRoute('')}>All Stack</div>
            <div className={`${queries.stack === 'javascript' ? 'active_stack' : ''} filter_stack`} onClick={() => handleRoute('javascript')}>Javascript</div>
            <div className={`${queries.stack === 'reactjs' ? 'active_stack' : ''} filter_stack`} onClick={() => handleRoute('reactjs')}>React JS</div>
            <div className={`${queries.stack === 'nextjs' ? 'active_stack' : ''} filter_stack`} onClick={() => handleRoute('nextjs')}>Next JS</div>
            <div className={`${queries.stack === 'nodejs' ? 'active_stack' : ''} filter_stack`} onClick={() => handleRoute('nodejs')}>Node JS</div>
            <div className={`${queries.stack === 'tailwindcss' ? 'active_stack' : ''} filter_stack`} onClick={() => handleRoute('tailwindcss')}>Tailwind CSS</div>
        </div>
    )
}

export default FiltersStack