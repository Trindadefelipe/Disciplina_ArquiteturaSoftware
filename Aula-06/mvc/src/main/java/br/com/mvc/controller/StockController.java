package br.com.mvc.controller;

import java.math.BigInteger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import br.com.mvc.model.service.StockService;

@Controller
@RequestMapping("/stock")
public class StockController {
    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping
    public String viewStock(Model model) {
        model.addAttribute("products", stockService.listarTodos());
        return "stock";
    }

    @PostMapping("/entry")
    public String registrarEntrada(@RequestParam("productId") BigInteger id,
                                   @RequestParam("quantity") Integer quantity,
                                   RedirectAttributes redirectAttributes) {
        try {
            stockService.entradaEstoque(id, quantity);
            redirectAttributes.addFlashAttribute("successMessage", "Entrada de estoque realizada com sucesso!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", e.getMessage());
        }
        return "redirect:/stock";
    }

    @PostMapping("/exit")
    public String registrarSaida(@RequestParam("productId") BigInteger id,
                                 @RequestParam("quantity") Integer quantity,
                                 RedirectAttributes redirectAttributes) {
        try {
            stockService.saidaEstoque(id, quantity);
            redirectAttributes.addFlashAttribute("successMessage", "Saída de estoque realizada com sucesso!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", e.getMessage());
        }
        return "redirect:/stock";
    }

    @PostMapping("/discontinue/{id}")
    public String descontinuar(@PathVariable("id") BigInteger id, RedirectAttributes redirectAttributes) {
        try {
            stockService.descontinuarProduto(id, true);
            redirectAttributes.addFlashAttribute("successMessage", "Produto descontinuado com sucesso!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", e.getMessage());
        }
        return "redirect:/stock";
    }
}
