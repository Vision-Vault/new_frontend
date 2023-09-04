

export default function PostDetail({ data }) {
    return (
        <div className='aspost'>
            <div className="media">
                <img src="/assests/arch.jpg" alt="Header Image" />

            </div>
            <div className="detail">
                <div>
                    <strong>2500$</strong>
                    <strong>Allow donars: 2</strong>
                </div>
                <div>
                    Description: A building architect is a professional who
                    designs and plans buildings and other structures. They
                    work on the aesthetic, functional, and safety aspects
                    of a construction project. Architects create blueprints
                    and oversee the construction process to ensure that the
                    building meets design specifications and local building
                    codes.Description: A building architect is a professional who
                    designs and plans buildings and other structures. They
                    work on the aesthetic, functional, and safety aspects
                    of a construction project.
                </div>
                <div>
                    <select className="select">
                        <option><strong>Doner2 1000$</strong></option>
                        <option><strong>Doner2 1500$</strong></option>
                    </select>
                </div>
            </div>
        </div>
    )
}