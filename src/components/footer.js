import footerData from '../../content/footer/footer.json'

export default function Footer() {
    const {copyrightText, sections} = footerData
    return (
        <footer>
            <div>
                {sections && sections.map(section => (
                    <div key={section.title}>
                        <h1>{section.title}</h1>
                        <ul>
                            {section.links.map(link => (
                                <li key={link.name}><a href={link.url}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p>{copyrightText}</p>
        </footer>
    )
}
