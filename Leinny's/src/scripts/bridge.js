// ===== IMPLEMENTADORES =====

// Clase base para exportadores
class Exportador {
    exportar(datos) {
        throw new Error("Debes implementar el método exportar");
    }
}
// ===== ABSTRACCIÓN =====

// Clase Reporte que usa un exportador
class Reporte {
    constructor(exportador) {
        this.exportador = exportador;
    }

    generar(datos) {
        this.exportador.exportar(datos);
    }
}


// Exportar a PDF
class ExportadorPDF extends Exportador {
    exportar(datos) {
        const doc = new jsPDF();
        doc.text("Corte de Caja", 75, 10);
        let y = 20;

        for (const [clave, valor] of Object.entries(datos)) {
            doc.text(`${clave}: ${valor}`, 75, y);
            y += 10;
        }
       
        doc.save(`reporte_${fechaCorte}.pdf`);
    }
}


// Exportar a Excel
class ExportadorExcel extends Exportador {
    exportar(datos) {
        const worksheet = XLSX.utils.json_to_sheet([datos]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "CorteDeCaja");

        XLSX.writeFile(workbook, `reporte_${fechaCorte}.xlsx`);
    }
}


