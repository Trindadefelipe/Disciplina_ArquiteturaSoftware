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
import br.com.mvc.model.service.ProductService;
import br.com.mvc.model.service.SaleService;

@Controller
@RequestMapping("/sales")
public class SaleController {

    private final SaleService saleService;
    private final ProductService productService;

    public SaleController(SaleService saleService, ProductService productService) {
        this.saleService = saleService;
        this.productService = productService;
    }

    @GetMapping
    public String viewSales(Model model) {
        model.addAttribute("sales", saleService.listarTodas());
        model.addAttribute("products", productService.read());
        return "sales";
    }

    @PostMapping
    public String criarVenda(
        @RequestParam("productId") BigInteger productId,
        @RequestParam("quantity") Integer quantity,
        RedirectAttributes redirectAttributes
    ) {
        try {
            saleService.criarPedido(productId, quantity);
            redirectAttributes.addFlashAttribute("successMessage", "Pedido aberto com sucesso!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", e.getMessage());
        }
        return "redirect:/sales";
    }

    @PostMapping("/close/{id}")
    public String fecharPedido(
        @PathVariable("id") BigInteger id,
        RedirectAttributes redirectAttributes
    ) {
        try {
            saleService.fecharPedido(id);
            redirectAttributes.addFlashAttribute("successMessage", "Pedido fechado e faturado no Hub com sucesso!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", e.getMessage());
        }
        return "redirect:/sales";
    }
}
