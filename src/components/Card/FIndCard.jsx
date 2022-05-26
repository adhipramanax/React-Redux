import React, { Component } from "react";

class FIndCard extends Component {
  render() {
    return (
      <>
        <div class="container-sm card-cari-cars">
          <div class="row row-cari-cars">
            <div class="col-lg-11 col-12">
              <div class="row">
                <div class="col-lg-3 col-6 card-cari">
                  <p>Tiper Driver</p>
                  <select name="cars" id="tipe-driver" class="form-select menu">
                    <option value="" selected>
                      Pilih Tipe Driver
                    </option>
                    <option value="1">Dengan Sopir</option>
                    <option value="0">Tanpa Sopir (Lepas Kuncil)</option>
                  </select>
                </div>
                <div class="col-lg-3 col-6 card-cari">
                  <p>Tanggal</p>
                  <input
                    type="date"
                    id="tanggal"
                    name="tanggal"
                    class="form-control menu"
                  />
                </div>
                <div class="col-lg-3 col-6 card-cari">
                  <p>Waktu Jemput/Ambil</p>
                  <input
                    type="time"
                    id="waktu-ambil"
                    name="waktu"
                    class="form-control menu"
                  />
                </div>
                <div class="col-lg-3 col-6 card-cari">
                  <p>Jumlah Penumpang (optional)</p>
                  <input
                    type="text"
                    id="jumlah-penumpang"
                    name="jumlah-penumpang"
                    class="form-control menu"
                    placeholder="Jumlah Penumpang"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-1 col-12 btn-cari-mobil">
              <button
                id="cari-mobil"
                type="button"
                class="btn btn-primary btn-register"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FIndCard;
