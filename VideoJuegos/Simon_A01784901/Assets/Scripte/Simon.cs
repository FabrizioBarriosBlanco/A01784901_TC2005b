using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Simon : MonoBehaviour
{
    public Image Imagen_previa;

    public GameObject Imagen_guia;

    public List<Color> Colores;

    public int Cantidad_colores;

    public int Mostrar_colores;

    public int Faltantes;

    public Text Texto_faltante;

    public List<int> Secuencia;

    public Text Nivel_texto;

    public GameObject Escena_final;

    public int Puntaje_alto;

    public Text Texto_puntos;

    void Start()
    {
        Secuencia = new List<int>();
        StartCoroutine(Comenzar());
    }
    public void Generar()
    {
        Cantidad_colores++;

        Nivel_texto.text = "Level: " + Cantidad_colores;
        Secuencia.Add(Random.Range(0, 4));
        Mostrar_previo();
    }
    public void Mostrar_previo()
    {
        if (Secuencia.Count <= Mostrar_colores)
        {
            Imagen_previa.color = Color.white;
            Mostrar_colores = 0;
            Faltantes = Secuencia.Count;
            Texto_faltante.text = Faltantes.ToString();
            Imagen_guia.SetActive(false);
        }
        else
        {
            Imagen_previa.color = Colores[Secuencia[Mostrar_colores]];
            StartCoroutine(Mostrar_siguiente());
        }
    }
    public void Boton_color(int ID)
    {
        if (ID == Secuencia[Mostrar_colores]) 
        {
            Mostrar_colores++;
            Faltantes--;
            Texto_faltante.text = Faltantes.ToString();

            if (Mostrar_colores == Secuencia.Count)
            {
                Imagen_guia.SetActive(true);
                Texto_faltante.text = "";
                Faltantes = 0;
                Mostrar_colores = 0;
                StartCoroutine(Comenzar());
            }
        } 
        else
        {
            Escena_final.SetActive(true);
            Imagen_guia.SetActive(true);
            Puntaje_alto = PlayerPrefs.GetInt("Tus puntos fueron:");
            if (Cantidad_colores > Puntaje_alto)
            {
                Puntaje_alto = Cantidad_colores;
                PlayerPrefs.SetInt("Tus puntos fueron:", Puntaje_alto);
            }
            Texto_puntos.text = "Tus puntos fueron: " + Puntaje_alto;
            Texto_faltante.text = "";
            Faltantes = 0;
            Mostrar_colores = 0; 
        }    
    }
    public void Reintentar()
    {
        Secuencia = new List<int>();
        Cantidad_colores = 0;
        Nivel_texto.text = "Nivel: " + Cantidad_colores;
        Escena_final.SetActive(false);
        StartCoroutine(Comenzar());
    }
    IEnumerator Comenzar()
    {
        yield return new WaitForSeconds(0.5f);
        Generar();
    }
    IEnumerator Mostrar_siguiente()
    {
        yield return new WaitForSeconds(0.3f);
        Imagen_previa.color = Color.white;

        yield return new WaitForSeconds(0.7f);
        Mostrar_colores++;

        Mostrar_previo();
    }
}
