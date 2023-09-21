

export default function Info({data}) {
    return (
        Object.keys(data).map((info, i) => {
            if (info == "participants" || info == "type" || info == "accessibility") {
                return (
                    <div key={i} className="col info-warpper">
                        <p className="main__p-info">{info}</p>
                        <span className="main__span-info">{data[info]}</span>
                    </div>
                )
            }
        })
    )

}