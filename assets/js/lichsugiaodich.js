function load(){
    let list = localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")) : [];
    let change = ``;
    list.map((value, index)=>{
        let a = index;
        let list_ve = localStorage.getItem("list-ve") ? JSON.parse(localStorage.getItem("list-ve")) : [];
        list_ve.map((value, index)=>{
            if(list[a].makh==value.makh){
                let ve = value.mave;
                let ghe = value.maghe;
                let list_ghe = localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")) : [];
                list_ghe.map((value, index)=>{
                    if(value.maghe==ghe){
                        let ca = value.maca;
                        let gia = value.giaghe;
                        let list_ca = localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")) : [];
                        list_ca.map((value, index)=>{
                            if(value.maca==ca){
                                let phim = value.maph;
                                let list_phim = localStorage.getItem("list-film") ? JSON.parse(localStorage.getItem("list-film")) : [];
                                list_phim.map((value, index)=>{
                                    if(value.maph==phim){
                                        change = `<tr>
                                            <th>Mã vé</th>
                                            <th>Mã ghế</th>
                                            <th>Ca xem</th>
                                            <th>Phim</th>
                                            <th>Giá vé</th>
                                        </tr>
                                        <tr>
                                            <td>${ve}</td>
                                            <td>${ghe}</td>
                                            <td>${ca}</td>
                                            <td>${value.tenph}</td>
                                            <td>${gia}</td>
                                        </tr>`
                                        document.getElementById("bang").innerHTML = change;
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    })
}