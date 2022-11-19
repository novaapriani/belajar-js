// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))
const jmlVideo = document.querySelector('.jumlah-video')
const totalDurasi = document.querySelector('.total-durasi')

// pilih hanya "Javascript Lanjutan"
let jsLanjut = videos
			.filter(video => video.innerHTML.includes("JAVASCRIPT LANJUTAN"))

// ambil durasi masing masing video
			.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
			.map(waktu => {
				// [10:18] -> [10, 18] split
				const parts = waktu.split(":").map(part => parseFloat(part))
				return parts[0] * 60 + parts[1]
			})

// jumlahkan semua detik
			.reduce((sum, order) => sum + order);

// ubah format menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600)
jsLanjut = jsLanjut - jam * 3600
const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60

// simpan di DOM
jmlVideo.textContent = `${videos.filter(video => video.innerHTML.includes("JAVASCRIPT LANJUTAN")).length} video`
totalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`
