import { Typography } from "@/components/own/typography";

export default function Example() {
  return (
    <div>
      <Typography variant="h1" size="lg">
        Ini adalah H1 Besar
      </Typography>
      <Typography variant="h2" size="md">
        Ini adalah H2 Sedang
      </Typography>
      <Typography variant="h3" size="sm">
        Ini adalah H3 Kecil
      </Typography>
      <Typography variant="h4" size="xs">
        Ini adalah H4 Ekstra Kecil
      </Typography>
      <Typography variant="h5">Ini adalah H5 dengan Ukuran Default (md)</Typography>
      <Typography variant="h6" size="lg">
        Ini adalah H6 Besar
      </Typography>

      <Typography variant="p" size="xs">
        Ini adalah paragraf ekstra kecil.
      </Typography>
      <Typography variant="p" size="sm">
        Ini adalah paragraf kecil.
      </Typography>
      <Typography variant="p">Ini adalah paragraf dengan ukuran default (md).</Typography>
      <Typography variant="p" size="lg">
        Ini adalah paragraf besar.
      </Typography>

      <Typography variant="blockquote" size="sm">
        Ini adalah blockquote kecil. Lorem ipsum dolor sit amet.
      </Typography>

      <Typography variant="ul" size="md">
        <li>Item daftar tidak berurutan 1</li>
        <li>Item daftar tidak berurutan 2</li>
        <li>Item daftar tidak berurutan 3</li>
      </Typography>

      <Typography variant="ol" size="lg">
        <li>Item daftar berurutan 1</li>
        <li>Item daftar berurutan 2</li>
        <li>Item daftar berurutan 3</li>
      </Typography>

      <Typography>
        Ini adalah teks biasa dengan{" "}
        <Typography variant="code" size="sm">
          kode inline
        </Typography>{" "}
        di dalamnya.
      </Typography>

      <Typography variant="p" className="text-blue-500">
        Ini adalah paragraf dengan kelas tambahan untuk mengubah warna teks.
      </Typography>
    </div>
  );
}
